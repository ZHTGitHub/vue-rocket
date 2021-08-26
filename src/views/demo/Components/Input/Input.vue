<template>
  <div class="z-demo-input">
    <h4 class="text-h4">Input 输入框</h4>

    <section class="markdown api-container">
      <h5 class="text-h5">API</h5>
      

      <template v-for="(item, index) in input">
        <div :key="`input_${ index }`">
          <h6 class="text-h6">{{ item.title }}</h6>
          <table>
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
  import { input } from './cells'

  export default {
    name: 'ZDemoInput',
    data() {
      return {
        input
      }
    }
  }
</script>

<style scoped>
  
</style>