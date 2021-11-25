<template>
  <div class="dynamic-slot">
    <span 
      v-if="item.append"
      :class="item.appendClass" 
      slot="prepend-outer"
    >{{ item.append }}</span>
    <span 
      v-if="item.appendOuter"
      :class="item.appendOuterClass" 
      slot="prepend-outer"
    >{{ item.appendOuter }}</span>
    <span 
      v-if="item.prepend"
      :class="item.prependClass" 
      slot="prepend-outer"
    >{{ item.prepend }}</span>
    <span 
      v-if="item.prependOuter"
      :class="item.prependOuterClass" 
      slot="prepend-outer"
    >{{ item.prependOuter }}</span>
  </div>
</template>

<script>
  export default {
    name: 'DynamicSlot',
    
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>