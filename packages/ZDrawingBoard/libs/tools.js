const tools = {}

// 加载图片
tools.loadImage = function(src, fn) {
  const image = new Image()
  image.setAttribute('crossOrigin', 'anonymous')

  image.onload = function() {
    fn(image.width, image.height)
  }
  
  image.onerror = function() {
    console.log('image load failed!')
  }

  image.src = src + '?' + Date.now()
}

// 将base64转换为blob
tools.base64ToBlob = function ({ 
  b64data = '', 
  contentType = '', 
  name = 'image.png', 
  sliceSize = 512 
} = {}) {
  return new Promise(resolve => {
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
// 将blob转换为file
tools.blobToFile = function (theBlob, fileName) {
  theBlob.lastModifiedDate = new Date()
  theBlob.name = fileName
  return theBlob
}

export default tools