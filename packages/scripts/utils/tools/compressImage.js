/**
 * 压缩方法 
 * @param {string} file 文件
 * @param {Number} quality  0~1之间
*/
function compressImage(file, quality = 0.2) {
  if (file[0]) {
    // 如果是 file 数组返回 Promise 数组
    return Promise.all(Array.from(file).map(e => compressImage(e, quality))) 
  } 
  else {
    return new Promise((resolve) => {
      // 创建 FileReader
      const reader = new FileReader() 

      reader.onload = ({
        target: {
          result: src
        }
      }) => {
        // 创建 img 元素
        const image = new Image() 

        image.onload = async () => {
          // 创建 canvas 元素
          const canvas = document.createElement('canvas') 
          canvas.width = image.width
          canvas.height = image.height
          // 绘制 canvas
          canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height) 

          const canvasURL = canvas.toDataURL('image/jpeg', quality)
          const buffer = atob(canvasURL.split(',')[1])
          let length = buffer.length
          const bufferArray = new Uint8Array(new ArrayBuffer(length))

          while (length--) {
            bufferArray[length] = buffer.charCodeAt(length)
          }

          const miniFile = new File([bufferArray], file.name, { type: 'image/jpeg' })

          resolve({
            file: miniFile,
            origin: file,
            beforeSrc: src,
            afterSrc: canvasURL,
            beforeKB: Number((file.size / 1024).toFixed(2)),
            afterKB: Number((miniFile.size / 1024).toFixed(2))
          })
        }

        image.src = src
      }

      reader.readAsDataURL(file)
    })
  }
}

export default compressImage