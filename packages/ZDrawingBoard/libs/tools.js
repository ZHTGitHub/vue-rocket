const tools = {}

// 加载图片
tools.loadImage = function(src, fn) {
  const image = new Image()
  image.src = src
  image.setAttribute('crossOrigin', 'Anonymous')

  image.onload = function() {
    fn(image.width, image.height)
  }
  
  image.onerror = function() {
    console.log('image load failed!')
  }
}

// 将base64转换为blob
tools.dataURLtoBlob = function (dataurl) {
  var arr = dataurl.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
// 将blob转换为file
tools.blobToFile = function (theBlob, fileName) {
  theBlob.lastModifiedDate = new Date()
  theBlob.name = fileName
  return theBlob
}

export default tools