<template>
  <button @click="onClick">switch</button>
  <hr>
  <DemoList v-if="foo === 'DemoList'" />
  <DemoItem v-if="foo === 'DemoItem'" />
</template>

<script>
import DemoList from './views/DemoList.vue'
import DemoItem from './views/DemoItem.vue'
export default {
  components:{DemoList,DemoItem},
  data() {
    return {
      foo: 'DemoList'
    }
  },
  methods: {
    onClick() {
      this.foo === 'DemoList' ? (this.foo = 'DemoItem') : (this.foo = 'DemoList');
    }
  }
}
</script>