<template>
  <div class="demo-grid">
    <typing-title :title="$route.meta.title"></typing-title>

    <div class="mb-8">
      <div class="z-row">
        <div class="z-col-24">
          <div class="text-center bg-blue box">z-col-24</div>
        </div>
      </div>
    </div>

    <div class="mb-8">
      <div class="z-row">
        <div class="z-col-12">
          <div class="text-center bg-cyan box">z-col-12</div>
        </div>
        <div class="z-col-12">
          <div class="text-center bg-blue box">z-col-12</div>
        </div>
      </div>
    </div>

    <div class="mb-8">
      <div class="z-row">
        <div class="z-col-8">
          <div class="text-center bg-cyan box">z-col-8</div>
        </div>
        <div class="z-col-8">
          <div class="text-center bg-blue box">z-col-8</div>
        </div>
        <div class="z-col-8">
          <div class="text-center bg-cyan box">z-col-8</div>
        </div>
      </div>
    </div>

    <div class="mb-8">
      <div class="z-row">
        <div class="z-col-6">
          <div class="text-center bg-cyan box">z-col-6</div>
        </div>
        <div class="z-col-6">
          <div class="text-center bg-blue box">z-col-6</div>
        </div>
        <div class="z-col-6">
          <div class="text-center bg-cyan box">z-col-6</div>
        </div>
        <div class="z-col-6">
          <div class="text-center bg-blue box">z-col-6</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .box {
    height: 54px;
    line-height: 54px;
  }
</style>