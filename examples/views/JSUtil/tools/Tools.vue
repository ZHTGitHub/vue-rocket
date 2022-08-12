<template>
  <div class="form-rules">
    <typing-title :title="$route.meta.title"></typing-title>

    <div class="mb-12">
      <p class="text-bold">导入</p>
      <pre><code class="language-javascript">import { tools } from 'vue-rocket'</code></pre>
    </div>

    <!-- getType BEGIN -->
      <div class="mb-12">
        <p class="text-bold">getType</p>
        <pre><code class="language-javascript">{{ cells.getTypeCode }}</code></pre>
      </div>
    <!-- getType END -->

    <!-- getScrollOffset BEGIN -->
      <div class="mb-12">
        <p class="text-bold">getScrollOffset</p>
        <pre><code class="language-javascript">{{ cells.getScrollOffsetCode }}</code></pre>
      </div>
    <!-- getScrollOffset END -->

    <!-- getViewportSize BEGIN -->
      <div class="mb-12">
        <p class="text-bold">getViewportSize</p>
        <pre><code class="language-javascript">{{ cells.getViewportSizeCode }}</code></pre>
      </div>
    <!-- getViewportSize END -->

    <!-- isObject BEGIN -->
      <div class="mb-12">
        <p class="text-bold">isObject</p>
        <pre><code class="language-javascript">{{ cells.isObjectCode }}</code></pre>
      </div>
    <!-- isObject END -->

    <!-- isArray BEGIN -->
      <div class="mb-12">
        <p class="text-bold">isArray</p>
        <pre><code class="language-javascript">{{ cells.isArrayCode }}</code></pre>
      </div>
    <!-- isArray END -->

    <!-- isEqual BEGIN -->
      <div class="mb-12">
        <p class="text-bold">isEqual</p>
        <pre><code class="language-javascript">{{ cells.isEqualCode }}</code></pre>
      </div>
    <!-- isEqual END -->

    <!-- isYummy BEGIN -->
      <div class="mb-12">
        <p class="text-bold">isYummy</p>
        <pre><code class="language-javascript">{{ cells.isYummyCode }}</code></pre>
      </div>
    <!-- isYummy END -->

    <!-- isLousy BEGIN -->
      <div class="mb-12">
        <p class="text-bold">isLousy</p>
        <pre><code class="language-javascript">{{ cells.isLousyCode }}</code></pre>
      </div>
    <!-- isLousy END -->

    <!-- find BEGIN -->
      <div class="mb-12">
        <p class="text-bold">find</p>
        <pre><code class="language-javascript">{{ cells.findCode }}</code></pre>
      </div>
    <!-- find END -->

    <!-- findIndex BEGIN -->
      <div class="mb-12">
        <p class="text-bold">findIndex</p>
        <pre><code class="language-javascript">{{ cells.findIndexCode }}</code></pre>
      </div>
    <!-- findIndex END -->

    <!-- deepClone BEGIN -->
      <div class="mb-12">
        <p class="text-bold">deepClone</p>
        <pre><code class="language-javascript">{{ cells.deepCloneCode }}</code></pre>
      </div>
    <!-- deepClone END -->

    <!-- removeDuplicate BEGIN -->
      <div class="mb-12">
        <p class="text-bold">removeDuplicate</p>
        <pre><code class="language-javascript">{{ cells.removeDuplicateCode }}</code></pre>
      </div>
    <!-- removeDuplicate END -->

    <!-- flatArray BEGIN -->
      <div class="mb-12">
        <p class="text-bold">flatArray</p>
        <pre><code class="language-javascript">{{ cells.flatArrayCode }}</code></pre>
      </div>
    <!-- flatArray END -->
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.min.css'

  import tools from '../../../../packages/scripts/utils/tools'
  import cells from './cells'

  export default {
    name: 'Tools',

    data() {
      return {
        cells
      }
    },

    created() {
      console.log(tools.isNull(undefined))
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>

<style scoped lang="scss">
  @import "../style.scss";
</style>