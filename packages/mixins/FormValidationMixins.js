import { mapState } from 'vuex'

export default {
  created() { 
    this.$validator.attach({
      // vm: this,
      formId: this.formId,
      formKey: this.formKey,
      value: this.forms[this.formId][this.formKey],
      label: this.label,
      validation: this.validation
    })
  },

  computed: {
    ...mapState(['forms'])
  },

  watch: {
    value() { 
      const errorMessage = this.$validator.validate({
        formId: this.formId,
        formKey: this.formKey,
        value: this.value
      })
      this.errorMessage = errorMessage
      this.incorrect = false
      if(errorMessage) {
        this.incorrect = true
      }
      console.log(this.errorMessage)
    }
  }
}