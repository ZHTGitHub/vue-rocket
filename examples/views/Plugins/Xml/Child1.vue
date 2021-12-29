<template>
  <div class="child">
    
  </div>
</template>

<script>
  export default {
    beforeCreate() {
      console.warn('child1 beforeCreate')
    },

    created() {
      console.warn('child1 created')
    },

    beforeMount() {
      console.warn('child1 beforeMount')
    },

    mounted() {
      console.warn('child1 mounted')
    },

    // beforeUpdate() {
    //   console.warn('child1 beforeUpdate')
    // },

    // updated() {
    //   console.warn('child1 updated')
    // }
  }
</script>