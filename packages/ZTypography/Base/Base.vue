<template>
  <Ellipsis>
    <slot></slot>
    <Editable />
  </Ellipsis>
</template>

<script>
  import ZTypographyMixins from '../ZTypographyMixins'
  import Editable from '../Editable'
  import Ellipsis from './Ellipsis'

  export default {
    name: 'ZTypographyBase',
    mixins: [ZTypographyMixins],

    components: {
      Editable,
      Ellipsis
    }
  }
</script>