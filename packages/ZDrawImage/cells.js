const options = [
  {
    key: 'screenshot',
    icon: 'mdi-content-cut',
    tips: '切图(ctrl+a)',
    color: '#6a6a6a',
    size: 20,
    style: {
      transform: 'rotate(-90deg)'
    }
  },

  {
    key: 'rectangle',
    icon: 'mdi-checkbox-blank-outline',
    tips: '矩形(ctrl+x)',
    color: '#6a6a6a',
    size: 23
  },

  {
    key: 'text',
    icon: 'mdi-format-text',
    tips: '文字(ctrl+e)',
    color: '#6a6a6a',
    size: 24
  },

  {
    key: 'clear',
    icon: 'mdi-close',
    tips: '清除(ctrl+z)',
    color: 'error',
    size: 24
  },

  {
    key: 'save',
    icon: 'mdi-check',
    tips: '保存(ctrl+s)',
    color: 'success',
    size: 24
  }
]

export default {
  options
}