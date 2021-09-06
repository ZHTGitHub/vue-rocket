import { mapState } from 'vuex'

export default {
  created() { 
    this.$validator.attach({
      formId: this.formId,
      formKey: this.formKey,
      value: this.value,
      label: this.label,
      validation: this.validation
    })
  },

  computed: {
    ...mapState(['forms'])
  },

  watch: {
    value(value) { 
      const errorMessage = this.$validator.validate({
        formId: this.formId,
        formKey: this.formKey,
        value: value,
        label: this.label,
        validation: this.validation
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