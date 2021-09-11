<template>
  <div class="demo-padding">

    <div class="orange" style="overflow:hidden">
      <div class="green pa-2 ma-0 elevation-4">
        <div class="white text-center">
          Use the controls above to try out the different spacing helpers.
        </div>
      </div>
    </div>

    <!-- <template v-for="(items, index) in cells.padding">
      <table class="mr-4 api-table" :key="`padding_${ index }`">
        <thead>
          <tr>
            <th>类名</th>
            <th>效果</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, i) in items" :key="`padding_${ i }`">
            <td>{{ item.class }}</td>
            <td>{{ item.label }}</td>
          </tr>
        </tbody>
      </table>
    </template>

    <template v-for="(items, index) in cells.margin">
      <table class="mr-4 api-table" :key="`margin_${ index }`">
        <thead>
          <tr>
            <th>类名</th>
            <th>效果</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, i) in items" :key="`margin_${ i }`">
            <td>{{ item.class }}</td>
            <td>{{ item.label }}</td>
          </tr>
        </tbody>
      </table>
    </template> -->
  </div>
</template>

<script>
  import cells from './cells'

  export default {
    name: 'DemoStylePadding',
    data() {
      return {
        cells
      }
    },

    created() {
      console.log(this.padding)
    }
  }
</script>

<style scoped>
  
</style>