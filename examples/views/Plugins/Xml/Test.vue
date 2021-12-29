<template>
  <div class="test">
    <child1-component></child1-component>
    <child2-component></child2-component>
  </div>
</template>

<script>
  import Child1 from './Child1'

  export default {
    beforeCreate() {
      console.error('parent beforeCreate')
    },

    created() {
      console.error('parent created')
    },

    beforeMount() {
      console.error('parent beforeMount')
    },

    mounted() {
      console.error('parent mounted')
    },

    // beforeUpdate() {
    //   console.error('parent beforeUpdate')
    // },

    // updated() {
    //   console.error('parent updated')
    // },

    components: {
      'child1-component': Child1,
      'child2-component': () => import('./Child2')
    }
  }
</script>