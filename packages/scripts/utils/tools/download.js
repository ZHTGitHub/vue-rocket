const downloadFile = (file) => {
  var anchor = document.createElement('a')
  anchor.download = '日志.csv'
  anchor.style.display = 'none'
  var blob = new Blob(['\ufeff' + file], {type: 'text/csv;charset=UTF-8'})

  anchor.href = URL.createObjectURL(blob)
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}