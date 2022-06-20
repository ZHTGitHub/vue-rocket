<template>
  <div class="demo-typography">
    <typing-title :title="$route.meta.title"></typing-title>

    <div class="z-flex flex-wrap">
      <template v-for="(items, index) in typography">
        <table class="mr-4 api-table" :key="`typography_${ index }`">
          <thead>
            <tr>
              <th>类名</th>
              <th>效果</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, i) in items" :key="`typography_${ i }`">
              <td>{{ item.class }}</td>
              <td>{{ item.label }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </div>

    <div class="z-flex">
      <span 
        v-for="(item, index) in colorItems"
        :key="`color_${ index }`"
        :class="['mr-4', item.class]"
      >{{ item.label }}</span>
    </div>

    <div class="z-flex mt-12">
      <span 
        v-for="(item, index) in colorItems"
        :key="`color_${ index }`"
        :class="['text-shadow mr-4', item.class]"
      >{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
  import { typography, colorItems } from './cells'

  export default {
    name: 'DemoStyleTypography',
    data() {
      return {
        typography,
        colorItems
      }
    }
  }
</script>

<style scoped>

</style>