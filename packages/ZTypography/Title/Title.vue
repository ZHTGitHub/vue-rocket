<template>
  <Base>
    <Title>{{ $slots.default[0].text }}</Title>
  </Base>
</template>

<script>
  import ZTypographyMixins from '../ZTypographyMixins'
  import Title from './Title.js'
  import Base from '../Base'

  export default {
    name: 'ZTypography.Title',
    mixins: [ZTypographyMixins],

    components: {
      Title,
      Base
    }
  }
</script>