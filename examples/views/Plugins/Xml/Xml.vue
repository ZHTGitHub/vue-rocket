<template>
  <div class="xml">
    <div class="xml-content">
      <pre v-highlightjs="xml_show" >
        <code ref="code" class="highlight_s" contenteditable="true"></code>
      </pre>
    </div>

    <z-btn @click="getXml">获取xml</z-btn>
  </div>
</template>

<script>
  import vkbeautify from 'vkbeautify'

  const xmlSource = `<?xml version="1.0" encoding="UTF-8"?><note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>`

  export default {
    name: 'Xml',

    data() {
      return {
        xml_show: null
      }
    },

    created() {
      this.xml_show = vkbeautify.xml(xmlSource)
    },

    methods: {
      getXml() {
        console.log(this.$refs.code.innerText)
      }
    }
  }
</script>

<style scoped lang="scss">
  .xml-content {
    height: 400px;
    overflow: hidden;

    &>pre {
      height: 100%;

      &>code.highlight_s {
        margin-top: -24px;
        height: 100%;
        border: 2px solid transparent;
        transition: .3s cubic-bezier(.25,.8,.5,1);

        &:focus {
          border: 2px solid #1976d2;
          outline: none;
        }
      }
    }
  }

  
</style>