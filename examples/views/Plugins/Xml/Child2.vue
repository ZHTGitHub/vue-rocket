<template>
  <div class="child">
    
  </div>
</template>

<script>
  export default {
    beforeCreate() {
      console.log('child2 beforeCreate')
    },

    created() {
      console.log('child2 created')
    },

    beforeMount() {
      console.log('child2 beforeMount')
    },

    mounted() {
      console.log('child2 mounted')
    },

    // beforeUpdate() {
    //   console.log('child2 beforeUpdate')
    // },

    // updated() {
    //   console.log('child2 updated')
    // }
  }
</script>