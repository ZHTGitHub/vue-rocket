const fileEvents = {}

// 将File对象转化为Blob对象
fileEvents.fileToBlob = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = function (event) {
      const blob = new Blob([event.target.result], { type: file.type })
      const URL = window.URL || window.webkitURL

      const blobURL = URL.createObjectURL(blob)

      resolve(blobURL)
    }

    reader.readAsArrayBuffer(file)

    reader.onerror = function(error) {
      reject(error)
    }
  })
}

// File对象转Base64编码
fileEvents.fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = function(event) {
      resolve(event.target.result)
    }

    reader.readAsDataURL(file)

    reader.onerror = function(error) {
      reject(error)
    }
  })
}

// Base64编码转File对象
fileEvents.base64ToFile = (base64, name) => {
  let arr = base64.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)

  while(n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], name, { type: mime })
}

// 压缩文件
fileEvents.compressFile = (file, quality = 0.2) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader() 

    reader.onload = (event) => {
      const { target: { result: src } } = event

      const image = new Image() 

      image.onload = async () => {
        const canvas = document.createElement('canvas') 
        canvas.width = image.width
        canvas.height = image.height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(image, 0, 0, image.width, image.height) 

        const canvasURL = canvas.toDataURL('image/jpeg', quality)

        resolve(fileEvents.base64ToFile(canvasURL, file.name))
      }

      image.src = src
    }

    reader.readAsDataURL(file)

    reader.onerror = function(error) {
      reject(error)
    }
  })
}

export default fileEvents