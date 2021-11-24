<template>
  <div class="z-demo-drawer">
    <typing-title :title="$route.meta.title"></typing-title>

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