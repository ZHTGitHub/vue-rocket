<template>
  <div class="test">

    <z-btn
      @click="add"
    >
      add
    </z-btn>

    <div v-for="(items, index) in list" :key="index">
      <template v-for="(item, iIndex) in items">
        <div :key="iIndex">{{ item.a }}</div>
      </template>
    </div>
    
    <!-- <child1-component></child1-component>
    <child2-component></child2-component> -->
  </div>
</template>

<script>
  import Child1 from './Child1'

  export default {
    data() {
      return {
        list: [[{a: 1}, { a: 2}], [{a: 3}, { a: 4}]]
      }
    },

    // beforeCreate() {
    //   console.error('parent beforeCreate')
    // },

    // created() {
    //   console.error('parent created')
    // },

    // beforeMount() {
    //   console.error('parent beforeMount')
    // },

    // mounted() {
    //   console.error('parent mounted')
    // },

    // beforeUpdate() {
    //   console.error('parent beforeUpdate')
    // },

    // updated() {
    //   console.error('parent updated')
    // },

    methods: {
      add() {

        this.$set(this.list, this.list.length, [{a: 5}, { a: 6}])
        // this.list.push([{a: 5}, { a: 6}])
      }
    },

    components: {
      'child1-component': Child1,
      'child2-component': () => import('./Child2')
    }
  }
</script>