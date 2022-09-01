const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)

    reader.onload = function (event) {
      const blob = new Blob([event.target.result], { type: file.type })
      const URL = window.URL || window.webkitURL

      const blobURL = URL.createObjectURL(blob)

      resolve(blobURL)
    }

    reader.onerror = function(error) {
      reject(error)
    }
  })
}

export default fileToBase64