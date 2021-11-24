<template>
  <div class="demo-round">
    <typing-title :title="$route.meta.title"></typing-title>
    
    <div class="z-flex flex-wrap">
      <template v-for="(items, index) in round">
        <table class="mr-4 api-table" :key="`round_${ index }`">
          <thead>
            <tr>
              <th>类名</th>
              <th>效果</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in items" :key="`round_${ index }`">
              <td>{{ item.class }}</td>
              <td>{{ item.label }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </div>
    
  </div>
</template>

<script>
  import { round } from './cells'

  export default {
    name: 'DemoStyleRound',
    data() {
      return {
        round
      }
    }
  }
</script>

<style scoped>

</style>