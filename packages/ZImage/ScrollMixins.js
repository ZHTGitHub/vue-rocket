export default {
  methods: {
    scroll(direction) {
      switch (direction) {
        // 向左滚动
        case 'left':
          this.zImageRef.scrollLeft -= this.scrollRange
          break;
        
        // 向右滚动
        case 'right':
          this.zImageRef.scrollLeft += this.scrollRange
          break;
        
        // 向上滚动
        case 'up':
          this.zImageRef.scrollTop -= this.scrollRange
          break;

        // 向下滚动
        case 'down':
          this.zImageRef.scrollTop += this.scrollRange
          break;
      }
    }
  }
}