<template>
  <div class="z-demo-drawer">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

    <usage-examples></usage-examples>

    <drawer-attributes></drawer-attributes>
  </div>
</template>

<script>
  export default {
    name: "ZDemoDrawer",

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'drawer-attributes': () => import('./DrawerAttributes.vue')
    }
  }
</script>