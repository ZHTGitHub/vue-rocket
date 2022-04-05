<template>
  <div>
    <slot></slot>
    <RenderEdit />
  </div>
</template>

<script>
  import RenderEdit from './renderEdit.vue'

  export default {
    name: 'Ellipsis',

    components: {
      RenderEdit
    }
  }
</script>