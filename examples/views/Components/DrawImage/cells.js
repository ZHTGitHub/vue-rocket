const options = [
  {
    key: 'screenshot',
    icon: 'mdi-content-cut',
    tips: '切图(Ctrl+A)',
    color: '#6a6a6a',
    size: 20,
    style: {
      transform: 'rotate(-90deg)'
    }
  },

  {
    key: 'rectangle',
    icon: 'mdi-checkbox-blank-outline',
    tips: '矩形(Ctrl+X)',
    color: '#6a6a6a',
    size: 23
  },

  {
    key: 'text',
    icon: 'mdi-format-text',
    tips: '文字(Ctrl+E)',
    color: '#6a6a6a',
    size: 24
  },

  {
    key: 'rotateL',
    icon: 'mdi-rotate-left-variant',
    tips: '左旋转(Ctrl+L)',
    color: '#6a6a6a',
    size: 20
  },

  {
    key: 'rotateR',
    icon: 'mdi-rotate-right-variant',
    tips: '右旋转(Ctrl+R)',
    color: '#6a6a6a',
    size: 20
  },

  {
    key: 'clear',
    icon: 'mdi-close',
    tips: '清除(Ctrl+Z)',
    color: 'error',
    size: 24
  },

  {
    key: 'save',
    icon: 'mdi-check',
    tips: '保存(Ctrl+S)',
    color: 'success',
    size: 24
  }
]

export default {
  options
}