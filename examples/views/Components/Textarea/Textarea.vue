<template>
  <div class="z-demo-textarea">
    <h4 class="mb-8 text-h4">Textarea 输入框</h4>

    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-textarea
                :formId="formId"
                :formKey="formKey"
                label="姓名"
                :rules="[{ required: true, message: '姓名为必填项.' }]"
              >
              &lt;/z-textarea>
            &lt;/template>

            &lt;script>
              import { Textarea } from 'vue-rocket'

              export default {
                data() {
                  return {
                    formId: 'info'
                  }
                }
              }
            &lt;/script>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <z-textarea
          formId="formId"
          formKey="name"
          label="自我介绍"
          :rules="[{ required: true, message: '自我介绍为必填项.' }]"
          @click:prepend="onClick"
        ></z-textarea>
      </div>
    </usage-demo>

    <section class="markdown api-container">
      <h5 class="text-h5">API</h5>
      <template v-for="(item, index) in textarea">
        <div class="mb-10" :key="`textarea_${ index }`">
          <h6 class="text-h6">{{ item.title }}</h6>
          <table class="api-table">
            <thead>
              <tr>
                <th v-for="(title, nIndex) in item.titles" :key="`name_${ nIndex }`">{{ title }}</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(child, i) in item.apis" :key="`textarea_${ index }_${ i }`">
                <td v-if="child.name">{{ child.name }}</td>
                <td v-if="child.required">{{ child.required }}</td>
                <td v-if="child.type">{{ child.type }}</td>
                <td v-if="child.acceptedValues">{{ child.acceptedValues }}</td>
                <td v-if="child.default">{{ child.default }}</td>
                <td v-if="child.parameters">{{ child.parameters }}</td>
                <td v-if="child.description">{{ child.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
  import { textarea } from './cells'

  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  export default {
    name: 'ZDemoTextarea',
    data() {
      return {
        textarea
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onClick() {

      }
    }
  }
</script>