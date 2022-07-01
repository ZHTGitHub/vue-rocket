<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <div class="box">
          <z-text-field 
            formId="list" 
            formKey="list"
            :autofocus="autofocus"
            :defaultValue="value"
            @blur="onBlur"
            @focus="onFocus"
            @input="onInput"
          ></z-text-field>

          <div 
            v-if="show" 
            class="dropdown"
          >
            <z-list 
              :dataSource="list"
              :elevation="1"  
              :defaultValue="value"
              @input="handleInput"
            >
              <template v-slot:default="{ item }">
                <div class="py-1 px-2 item">
                  {{ item }}
                </div>
              </template>
            </z-list>
          </div>
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

`

  export default {
    name: 'UsageExamples',

    data() {  
      return {
        code,
        list: [
          '河南省洛阳市白马寺荣康医院',
          '广州市越秀区白云街社区卫生服务中心',
          '包头市白云医院',
          '蒲白矿务局马村煤矿医院',
          '青白江区爱雅堂口腔门诊部',
          '白云区第二人民医院',
          '宁波市北仑区白峰镇社区卫生服务中心（白峰镇卫生院）',
          '苏州市姑苏区白洋湾街道白洋湾社区卫生服务站',
          '吉林省白城发电厂医院 白泥湖园艺场职工医院 白泥湖园艺场职工医院',
          '白泥湖园艺场职工医院 白泥湖园艺场职工医院',
          '白银市妇幼保健院',
          '郧阳医学院白浪医院',
          '长春市朝阳区白菊医院',
          '青白江旗华牙科诊所',
          '白云区艳山红街道办事处社区卫生服务中心',
          '正镶白旗妇幼保健所',
          '吉林省白山市妇幼保健院',
          '哈尔滨市第一专科医院白渔泡分院',
        ],
        show: false,
        value: '青白江区爱雅堂口腔门诊部',
        autofocus: false
      }
    },

    created() {
      // setTimeout(() => {
      //   for(let i = 0; i < 30; i+=1) {
      //     this.list.push(i)
      //   }
      // }, 1000)
    },

    mounted() {
      Prism.highlightAll()

      document.body.addEventListener('click', (event) => {
        // event.stopPropagation()

        console.log(event)
        console.log(event.target.nodeName)

        if(event.target.className !== 'item' && event.target.nodeName !== 'INPUT') {
          this.show = false
        }
      })
    },

    methods: {
      onBlur() {
        // this.show = false 
      },

      onFocus() {
        this.show = true
      },

      onInput() {
        this.show = true
        console.log('change')
      },

      handleInput({ item: value }) {
        this.value = value
        this.show = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .box {
    position: relative;

    .dropdown {
      position: absolute;
      width: 180px;
      height: 300px;
      font-size: 12px;
      z-index: 1;
    }
  }
</style>