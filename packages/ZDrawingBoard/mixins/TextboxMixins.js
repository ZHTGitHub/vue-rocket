export default {
  methods: {
    // 创建输入框
    createTextbox(x, y) {
      const textbox = new fabric.Textbox('', {
        width: 80 / this.imageScale,
        top: y,
        left: x,
        padding: 4 / this.imageScale,
        borderScaleFactor: 1 / this.imageScale,
        borderColor: '#f00',
        editingBorderColor: '#f00',
        fill: '#f00',
        fontSize: 20 / this.imageScale,
        hasControls: false
      })

      textbox.type = 'textbox'
      textbox.index = this.count

      textbox.on('selected', () => {
        this.activeIndex = textbox.index
      })

      this.canvas.add(textbox).setActiveObject(textbox)
      textbox.enterEditing()

      this.ctxList[this.count] = textbox

      ++this.count
    }
  }
}