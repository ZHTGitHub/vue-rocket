// Base64 转 File
export const base64ToFile = (base64, filename) => {
  let 
    arr = base64.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)

  while(n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}

// Base64 转 Blob
export const base64ToBlob = ({ b64data = '', contentType = '', name = 'image.png', sliceSize = 512 } = {}) => {
  return new Promise((resolve, reject) => {
    // 使用 atob() 方法将数据解码
    let byteCharacters = atob(b64data)
    let byteArrays = []

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize)
      let byteNumbers = []

      for (let i = 0; i < slice.length; i++) {
          byteNumbers.push(slice.charCodeAt(i))
      }
      // 8 位无符号整数值的类型化数组。内容将初始化为 0。
      // 如果无法分配请求数目的字节，则将引发异常。
      byteArrays.push(new Uint8Array(byteNumbers))
    }

    let result = new Blob(byteArrays, {
      type: contentType
    })

    result = Object.assign(result, {
      // 这里一定要处理一下 URL.createObjectURL
      preview: URL.createObjectURL(result),
      name
    })

    resolve(result)
  })
}

export const imageToCanvas = (image) => {
  const canvas = document.createElement('canvas')
  canvas.width = image.width
  canvas.height = image.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(image, 0, 0)
  return canvas
}

export const urlToBase64 = (url) => {
  return new Promise(resolve => {
    const image = new Image()
    image.crossOrigin = 'anonymous'

    image.addEventListener('load', function() {
      const canvas = document.createElement('canvas')

      canvas.width = image.width
      canvas.height = image.height

      const context = canvas.getContext('2d')
      context.drawImage(image, 0, 0, image.width, image.height)

      resolve({
        data: canvas.toDataURL('image/png')
      }) 
    }, false)

    image.addEventListener('error', function(error) {
      resolve(error)
    })

    image.src = url + '?' + Date.now()
    // image.src = url + '?' + '123456'
  })
}

export const rotatedDirectionMap = new Map([
  [0, 'top'],
  [1, 'right'],
  [-3, 'right'],
  [2, 'bottom'],
  [-2, 'bottom'],
  [3, 'left'],
  [-1, 'left']
])

