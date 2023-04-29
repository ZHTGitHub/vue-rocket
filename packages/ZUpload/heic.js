import heic2any from 'heic2any'

const blobToFile = (blob, fileName) => {
  if(Array.isArray(blob)) {
    blob = new Blob(blob)
  }

  return new File([blob], fileName, { type: blob.type })
}

export const isHEIC = (file) => {
  function isHEICImage(reader) {
    const bufferInt = new Uint8Array(reader.result)
    const arr = bufferInt.slice(0, 4)  // 通用格式图片
    const headerArr = bufferInt.slice(0, 16)  // heic格式图片
    let header = ''
    let allHeader = ''
    
    for(let i = 0; i < arr.length; i++) {
      header += arr[i].toString(16)  // 转成16进制的buffer
    }
    
    for(let i = 0; i < headerArr.length; i++) {
      allHeader += headerArr[i].toString(16)
    }

    /**
     * @description heic开头前4位可能是00020也可能是00018，其实这里应该是判断头尾000的，可以自己改下
     * @link magic numbers: http://www.garykessler.net/library/file_sigs.html
     */ 
    if(['00018', '00020'].includes(header)) {
      if(allHeader.lastIndexOf('68656963') === 13 || allHeader.lastIndexOf('68656966') === 13) {
        return true
      }
    }

    return false
  }

  return new Promise((resolve) => {
    // 图片类型
		const heicTypes = ['image/heic', 'image/heif']
    const fileType = file.type

    if(heicTypes.includes(fileType)) {
      resolve(true)
    }

    // 图片后缀
    const fileName = file.name
    const heicNames = ['heic', 'heif']
    const extName = fileName.split('.').pop()

    if(heicNames.includes(extName)) {
      resolve(true)
    }
    
    // HEIC/HEIF 格式的图片文件的 MIME 类型不是标准的 image/heic 或 image/heif
    const buffer = new FileReader()

		buffer.onload = function() {
			resolve(isHEICImage(buffer))
		}

		buffer.readAsArrayBuffer(file)
	})
}

export const heic2 = (file) => {
  return new Promise(resolve => {
    heic2any({
      blob: file,
      toType: 'image/jpeg',
    })
    .then(blob => {
      resolve(blobToFile(blob, file.name))
    })
  })
}