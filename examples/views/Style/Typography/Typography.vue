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
        :class="['mb-4', item.class]"
      >{{ `${ item.class } ${ item.label }` }}</h1>
    </div>
    <!-- 标题 END -->

    <!-- 副标题大小 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      副标题大小
    </v-alert>

    <div class="mb-16">
      <h1 
        v-for="(item, index) in subtitleList" 
        :key="index" 
        :class="['mb-4', item.class]"
      >{{ `${ item.class } ${ item.label }` }}</h1>
    </div>
    <!-- 副标题大小 END -->

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
      <p
        v-for="(item, index) in weightList"
        :key="index"
        :class="[item.class]"
      >{{ `${ item.class } ${ item.label }` }}</p>
    </div>
    <!-- 字体强调 END -->

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

    <!-- 装饰线 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      装饰线
    </v-alert>

    <div class="mb-16">
      <p
        v-for="(item, index) in lineList"
        :key="index"
        :class="item.class"
      >{{ `${ item.class } ${ item.label }` }}</p>
    </div>
    <!-- 装饰线 END -->

    <!-- 不透明度 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      不透明度
    </v-alert>

    <div class="mb-16">
      <p
        v-for="(item, index) in accentList"
        :key="index"
        :class="item.class"
      >{{ `${ item.class } ${ item.label }` }}</p>
    </div>
    <!-- 不透明度 END -->

    <!-- 变形 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      变形
    </v-alert>

    <div class="mb-16">
      <p
        v-for="(item, index) in caseList"
        :key="index"
        :class="item.class"
      >{{ `${ item.class } ${ item.label }` }}</p>
    </div>
    <!-- 变形 END -->

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
      <p
        v-for="(item, index) in reverseList"
        :key="index"
        :class="item.class"
      >{{ `${ item.class } ${ item.label }` }}</p>
    </div>
    <!-- 文本方向 END -->

    <!-- 文本换行和溢出 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      文本换行和溢出
    </v-alert>

    <div class="mb-16">
      <p
        v-for="(item, index) in truncateList"
        :key="index"
        :class="['bg-yellow light', item.class]"
        :style="{ width: `${ item.width }px` }"
      >{{ `${ item.class } ${ item.label }` }}</p>
    </div>
    <!-- 文本换行和溢出 END -->

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
        :class="['mb-3', item.class]"
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

    <div class="mb-4">
      <span class="text-capitalize">usage：</span>
      &lt;span class="text-shadow text-red"&gt;嫣红&lt;/span&gt;
    </div>

    <div class="z-flex flex-wrap mb-16 colors">
      <span 
        v-for="(item, index) in colorList"
        :key="`color_${ index }`"
        :class="['mb-3 text-shadow', item.class]"
      >{{ `${ item.class } ${ item.label }` }}</span>
    </div>
    <!-- 字体阴影 END -->
  </div>
</template>

<script>
  import { 
    titleList, 
    subtitleList,
    weightList, 
    alignList, 
    lineList, 
    accentList,
    caseList,
    reverseList,
    truncateList,
    colorList
  } from './cells'

  export default {
    name: 'DemoStyleTypography',
    data() {
      return {
        titleList,
        subtitleList,
        weightList,
        alignList,
        lineList,
        accentList,
        caseList,
        reverseList,
        truncateList,
        colorList,

        color: 'text-blue'
      }
    }
  }
</script>

<style scoped lang="scss">
  .colors {
    width: 550px;
    padding: 16px 16px 4px 16px;
    background-color: #f1f1f1;

    &>span {
      display: inline-block;
      width: 160px;
    }
  }
</style>