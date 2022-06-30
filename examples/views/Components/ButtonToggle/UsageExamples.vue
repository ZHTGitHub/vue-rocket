<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <div class="z-flex">
          <z-btn-toggle
            formId="sexuals"
            formKey="sexual"
            color="primary"
            mandatory
            :options="directionOptions"
            @change="onChange"
            @click="onClick"
          ></z-btn-toggle>

          <z-btn-toggle
            formId="sexuals"
            formKey="sexual1"
            color="primary"
            mandatory
            :options="choiceItems"
            @change="onChange"
            @click="onClick"
          ></z-btn-toggle>
        </div>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

  const code = 
`
<z-btn-toggle
  formId="sexuals"
  formKey="sexual"
  color="primary"
  mandatory
  :options="directionOptions"
  @change="onChange($event)"
  @click="onClick"
></z-btn-toggle>
`

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        directionOptions: [
          { label: '东', value: 1, icon: 'mdi-arrow-right-bold' },
          { label: '西', value: 2, icon: 'mdi-arrow-left-bold' },
          { label: '南', value: 3, icon: 'mdi-arrow-down-bold' },
          { label: '北', value: 4, icon: 'mdi-arrow-up-bold' }
        ],

        choiceItems: [
          { label: '是', value: true },
          { label: '否', value: false }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onChange(value) {
        console.log('change', value)
      },

      onClick(event) {
        const { customValue } = event
        console.log('click', customValue)
      }
    }
  }
</script>