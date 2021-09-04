export default {
  created() {
    // if(this.validation.rule !== undefined) {
    //   this.$validator.attach({
    //     vm: this,
    //     label: this.label,
    //     rules: this.validation.rule,
    //     getter() {
    //       return this.value
    //     }
    //   })
    // }
    console.log(this)
    console.log(this.label)
    console.log(this.validation.rule)
    console.log(this.value)
  }
}