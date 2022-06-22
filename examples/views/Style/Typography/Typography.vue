<template>
  <div class="demo-typography">
    <typing-title :title="$route.meta.title"></typing-title>

    <!-- 标题 BEGIN -->
    <div>
      <h1 class="text-h1">text-h1</h1>
      <h2 class="text-h2">text-h2</h2>
      <h3 class="text-h3">text-h3</h3>
      <h4 class="text-h4">text-h4</h4>
      <h5 class="text-h5">text-h5</h5>
    </div>
    <!-- 标题 END -->

    <!-- 字体样式 BEGIN -->
    <div class="mt-4">
      <div class="fw-black">fw-black</div>
      <div class="fw-bold">fw-bold</div>
      <div class="fw-medium">fw-medium</div>
      <div class="fw-regular">fw-regular</div>
      <div class="fw-light">fw-light</div>
      <div class="fw-thin">fw-thin</div>
      <div class="font-italic">font-italic</div>  
    </div>
    <!-- 字体样式 END -->

    <!-- 对齐方式 BEGIN -->
    <div class="mt-4">
      <div class="text-left">左对齐(text-left)</div>
      <div class="text-center">居中(text-center)</div>
      <div class="text-right">右对齐(text-right)</div>
    </div>
    <!-- 对齐方式 END -->

    <!-- 划线 BEGIN -->
    <div class="mt-4">
      <div class="td-none">默认(td-none)</div>
      <div class="td-line-through">中划线(td-line-through)</div>
      <div class="td-overline">上划线(td-overline)</div>
      <div class="td-underline">下划线(td-underline)</div>
    </div>
    <!-- 划线 END -->

    <!-- 强调 BEGIN -->
    <div class="mt-4">
      <div class="text-primary">高度强调(text-primary)</div>
      <div class="text-secondary">中等强调(text-secondary)</div>
      <div class="text-disabled">禁用文本(text-disabled)</div>
    </div>
    <!-- 强调 END -->

    <!-- 字体大小写 BEGIN -->
    <div class="mt-4">
      <div class="text-lowercase">仅有小写字母(text-lowercase)</div>
      <div class="text-uppercase">仅有大写字母(text-uppercase)</div>
      <div class="text-capitalize">单词首字母大写(text-capitalize)</div>
    </div>
    <!-- 字体大小写 END -->

    <!-- 单行文本超出省略号 BEGIN -->
    <div class="mt-4">
      <div class="text-truncate" style="width: 300px">单行文本超出省略号(text-truncate)这是需要省略的内容</div>
    </div>
    <!-- 单行文本超出省略号 END -->

    <!-- display属性 BEGIN -->
    <div class="mt-4">
      <div>此元素不会被显示(display-none)</div>
      <div>此元素会被显示为内联元素(display-inline)</div>
      <div>此元素会被显示为行内块元素(display-inline-block)</div>
      <div>此元素会被显示为块级元素(display-block)</div>
    </div>
    <!-- display属性 END -->
    
    <div class="mt-4 z-flex">
      <span 
        v-for="(item, index) in colorItems"
        :key="`color_${ index }`"
        :class="['mr-4', item.class]"
      >{{ item.label }}</span>
    </div>

    <div class="z-flex mt-12">
      <span 
        v-for="(item, index) in colorItems"
        :key="`color_${ index }`"
        :class="['text-shadow mr-4', item.class]"
      >{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
  import { typography, colorItems } from './cells'

  export default {
    name: 'DemoStyleTypography',
    data() {
      return {
        typography,
        colorItems
      }
    }
  }
</script>

<style scoped lang="scss">
  .text-h1 {
    font-weight: 600;
    font-size: 38px !important;
    line-height: 1.23;
  }

  .text-h2 {
    font-weight: 600;
    font-size: 30px !important;
    line-height: 1.35;
  }

  .text-h3 {
    font-weight: 600;
    font-size: 24px !important;
    line-height: 1.35;
  }

  .text-h4 {
    font-weight: 600;
    font-size: 20px !important;
    line-height: 1.4;
  }

  .text-h5 {
    font-weight: 600;
    font-size: 16px !important;
    line-height: 1.5;
  }
</style>