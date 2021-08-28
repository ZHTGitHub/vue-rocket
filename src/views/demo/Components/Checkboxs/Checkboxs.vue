<template>
  <div class="z-demo-checkboxs">
    <h4 class="mb-8 text-h4">Checkboxs 多选框</h4>

    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-checkboxs
                :formId="formId"
                :formKey="formKey"
                label="兴趣爱好"
                :rules="[{ required: true, message: '兴趣爱好为必选项.' }]"
                :options="hobbyOptions"
                :defaultValue="[1]"
              >
              &lt;/z-checkboxs>
            &lt;/template>

            &lt;script>
              import { ZCheckboxs } from 'vue-rocket'

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
        <z-checkboxs
          formId="formId"
          formKey="hobby"
          label="兴趣爱好"
          :rules="[{ required: true, message: '兴趣爱好为必选项.' }]"
          :options="hobbyOptions"
          :defaultValue="[1]"
        ></z-checkboxs>
      </div>
    </usage-demo>

    <section class="markdown api-container">
      <h5 class="text-h5">API</h5>
      <template v-for="(item, index) in checkboxs">
        <div class="mb-10" :key="`input_${ index }`">
          <h6 class="text-h6">{{ item.title }}</h6>
          <table class="api-table">
            <thead>
              <tr>
                <th v-for="(title, nIndex) in item.titles" :key="`name_${ nIndex }`">{{ title }}</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(child, i) in item.apis" :key="`input_${ index }_${ i }`">
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
  import { checkboxs } from './cells'

  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  export default {
    name: 'ZDemoCheckboxs',
    data() {
      return {
        checkboxs,
        hobbyOptions: [
          { label: '游泳', value: 1 },
          { label: '网球', value: 2 },
          { label: '乒乓球', value: 3 },
          { label: '羽毛球', value: 4 }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>

<style scoped>
  
</style>