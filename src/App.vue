<template>
  <div id="app">
    <pager :now-page="nowPage" :page-count="20" :padding="3"></pager>
  </div>
</template>

<script>
import Pager from './components/Pager'
export default {
  components: {
    Pager
  },
  data () {
    return {
      nowPage: 1
    }
  },
  events: {
    'page-jump' (val) {
      this.nowPage = val
    }
  }
}
</script>
