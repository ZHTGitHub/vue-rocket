<template>
  <div class="z-demo-button">
    <h4 class="mb-8 text-h4">Button 按钮</h4>

    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-btn
                class="mr-4"
                :formId="formId"
                color="primary"
              >默认按钮&lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                :formId="formId"
                color="primary"
                disabled
              >禁用按钮&lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                btnType="modify"
                color="success"
              >
                &lt;v-icon left>
                  mdi-pencil
                &lt;/v-icon>
                编辑
              &lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                color="warning"
                icon
              >
                &lt;v-icon>mdi-thumb-up&lt;/v-icon>
              &lt;/z-btn>

              &lt;z-btn
                color="error"
                small
                fab
              >
                &lt;v-icon>mdi-heart&lt;/v-icon>
              &lt;/z-btn>
            &lt;/template>

            &lt;script>
              import { ZBtn } from 'vue-rocket'

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

        <div class="mb-4">
          <z-btn
            class="mr-4"
            formId="formId"
            color="primary"
            block
          >块级按钮</z-btn>
        </div>

        <div class="z-flex">
          <z-btn
            class="mr-4"
            formId="formId"
            color="primary"
          >默认按钮</z-btn>

          <z-btn
            class="mr-4"
            formId="formId"
            color="primary"
            disabled
          >禁用按钮</z-btn>

          <z-btn
            class="mr-4"
            formId="formId"
            color="success"
          >
            <v-icon left>
              mdi-pencil
            </v-icon>
            编辑
          </z-btn>

          <z-btn
            class="mr-4"
            formId="formId"
            color="warning"
            icon
          >
            <v-icon>mdi-thumb-up</v-icon>
          </z-btn>

          <z-btn
            formId="formId"
            color="error"
            small
            fab
          >
            <v-icon>mdi-heart</v-icon>
          </z-btn>
        </div>
      </div>
    </usage-demo>

    <section class="markdown api-container">
      <h5 class="text-h5">API</h5>
      <template v-for="(item, index) in button">
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
  import { button } from './cells'

  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  export default {
    name: 'ZDemoButton',
    data() {
      return {
        button
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>

<style scoped>
  
</style>