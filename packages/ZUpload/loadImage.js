const loadImage = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()

    fileReader.addEventListener('load', (event) => {
      console.log(event)
    })

    fileReader.readAsDataURL(file)
  })
}

export default loadImage