<template>
  <div class="z-demo-radios">
    <h4 class="mb-8 text-h4">Radios 单选框</h4>

    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-radios
                :formId="formId"
                :formKey="formKey"
                label="性别"
                :rules="[{ required: true, message: '请选择性别.' }]"
                :options="genderOptions"
                :defaultValue="[1]"
              >
              &lt;/z-radios>
            &lt;/template>

            &lt;script>
              import { ZRadios } from 'vue-rocket'

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
        <z-radios
          formId="formId"
          formKey="gender"
          label="性别"
          :rules="[{ required: true, message: '请选择性别.' }]"
          :options="genderOptions"
          :defaultValue="1"
        ></z-radios>
      </div>
    </usage-demo>

    <section class="markdown api-container">
      <h5 class="text-h5">API</h5>
      <template v-for="(item, index) in radios">
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
  import { radios } from './cells'

  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  export default {
    name: 'ZDemoRadios',
    data() {
      return {
        radios,
        genderOptions: [
          { label: '男性', value: 1 },
          { label: '女性', value: 2 }
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