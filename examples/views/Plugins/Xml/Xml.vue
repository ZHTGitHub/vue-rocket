<template>
  <div class="xml">
    <div class="xml-content">
      <pre v-highlightjs="xml_show" >
        <code ref="code" class="highlight_s" contenteditable="true"></code>
      </pre>
    </div>

    <z-btn @click="getXml">获取xml</z-btn>

    <input 
      type="file" 
      ref="upload" 
      accept=".xml" 
      @change="onSelect" 
      class="outputlist_upload"
    >

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
      // const result = this.loadXMLDoc('http://localhost:8899/test.xml')
      // this.xml_show = vkbeautify.xml(result)
    },

    methods: {
      getXml() {
        console.log(this.$refs.code.innerText)
      },

      async onSelect() {
        const result = await this.readXMLDoc()
        this.xml_show = vkbeautify.xml(result)
      },

      readXMLDoc(){  
        return new Promise((resolve, reject) => {
          var files = this.$refs.upload.files

          var reader = new FileReader()

          reader.readAsText(files[0], 'UTF-8')

          reader.onload = function(event) { 
            // let [content, xmlDoc] = [event.target.result, null]

            // if (window.DOMParser) {
            //   var parser = new DOMParser()
            //   xmlDoc = parser.parseFromString(content, 'text/xml')
            // } else {
            //   xmlDoc = new window.ActiveXObject('Microsoft.XMLDOM')
            //   xmlDoc.async = false
            //   xmlDoc.loadXML(content)
            // }

            resolve(event.target.result)
          }

          reader.onerror = function(error) {
            reject(error)
          }
        })
      },

      loadXMLDoc(dname) {
        let [xhttp, serialized] = [null, null]

        if (window.XMLHttpRequest) {
          xhttp = new XMLHttpRequest()
        } 
        else {
          xhttp = new window.ActiveXObject('Microsoft.XMLHTTP')
        }

        xhttp.open('GET', dname, false)
        xhttp.send()

        try {
          const serializer = new XMLSerializer()                                                                                           
          serialized = serializer.serializeToString(xhttp.responseXML)                                                                            
        }                                                                                                                                  
        catch (e) {
          serialized = xhttp.responseXML                                                                                                        
        } 

        return serialized
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