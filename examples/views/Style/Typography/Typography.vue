<template>
  <div class="demo-typography">
    <typing-title :title="$route.meta.title"></typing-title>

    <!-- 标题 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      标题
    </v-alert>

    <div class="mb-16">
      <h1 
        v-for="(item, index) in titleList" 
        :key="index" 
        :class="item.class"
      >{{ `${ item.class } ${ item.label }` }}</h1>
    </div>
    <!-- 标题 END -->

    <!-- 字体颜色 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      字体颜色
    </v-alert>

    <div class="z-flex flex-wrap mb-16 colors">
      <span 
        v-for="(item, index) in colorList"
        :key="`color_${ index }`"
        :class="[item.class]"
      >{{ `${ item.class } ${ item.label }` }}</span>
    </div>
    <!-- 字体颜色 END -->

    <!-- 字体阴影 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      字体阴影
    </v-alert>

    <div class="z-flex flex-wrap mb-16 colors">
      <span 
        v-for="(item, index) in colorList"
        :key="`color_${ index }`"
        :class="['text-shadow', item.class]"
      >{{ `${ item.class } ${ item.label }` }}</span>
    </div>
    <!-- 字体阴影 END -->

    <!-- 字体粗细 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      字体粗细
    </v-alert>

    <div class="mb-16">
      <div
        v-for="(item, index) in weightList"
        :key="index"
        :class="item.class"
      >{{ `${ item.class } ${ item.label }` }}</div>
    </div>
    <!-- 字体粗细 END -->

    <!-- 对齐方式 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      对齐方式
    </v-alert>

    <div class="mb-16">
      <div
        v-for="(item, index) in alignList"
        :key="index"
        :class="item.class"
      >{{ `${ item.class } ${ item.label }` }}</div>
    </div>
    <!-- 对齐方式 END -->

    <!-- 文本装饰 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      文本装饰
    </v-alert>

    <div class="mb-16">
      <div
        v-for="(item, index) in lineList"
        :key="index"
        :class="item.class"
      >{{ `${ item.class } ${ item.label }` }}</div>
    </div>
    <!-- 文本装饰 END -->

    <!-- 字体强调 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      字体强调
    </v-alert>

    <div class="mb-16">
      <div
        v-for="(item, index) in accentList"
        :key="index"
        :class="item.class"
      >{{ `${ item.class } ${ item.label }` }}</div>
    </div>
    <!-- 字体强调 END -->

    <!-- 文本变形 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      文本变形
    </v-alert>

    <div class="mb-16">
      <div
        v-for="(item, index) in caseList"
        :key="index"
        :class="item.class"
      >{{ `${ item.class } ${ item.label }` }}</div>
    </div>
    <!-- 文本变形 END -->

    <!-- 文本方向 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      文本方向
    </v-alert>

    <div class="mb-16">
      <div
        v-for="(item, index) in reverseList"
        :key="index"
        :class="item.class"
      >{{ `${ item.class } ${ item.label }` }}</div>
    </div>
    <!-- 文本方向 END -->

    <!-- 文本溢出 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      文本溢出
    </v-alert>

    <div class="mb-16">
      <div
        v-for="(item, index) in truncateList"
        :key="index"
        :class="item.class"
      >{{ `${ item.class } ${ item.label }` }}</div>
    </div>
    <!-- 文本溢出 END -->

    <!-- 元素显示类型 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      元素显示类型
    </v-alert>

    <div class="mb-0">
      <div
        v-for="(item, index) in dsiplayList"
        :key="index"
      >{{ `${ item.class } ${ item.label }` }}</div>
    </div>
    <!-- 元素显示类型 END -->
  </div>
</template>

<script>
  import { 
    titleList, 
    colorList, 
    weightList, 
    alignList, 
    lineList, 
    accentList,
    caseList,
    reverseList,
    truncateList,
    dsiplayList
  } from './cells'

  export default {
    name: 'DemoStyleTypography',
    data() {
      return {
        titleList,
        colorList,
        weightList,
        alignList,
        lineList,
        accentList,
        caseList,
        reverseList,
        truncateList,
        dsiplayList,

        color: 'text-blue'
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

  .colors {
    width: 550px;
    padding: 16px;
    background-color: #f1f1f1;

    &>span {
      display: inline-block;
      width: 160px;
    }
  }
</style>