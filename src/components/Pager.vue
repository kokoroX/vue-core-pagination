<template>
  <nav class="kokoro-pager">
    <ul class="pagination">
      <li @click.prevent="pageJump(1)"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
      <li :class="{ 'active': page === nowPage }" v-for="page in pages" @click.prevent="pageJump(page)"><a href="#">{{page}} <span class="sr-only">(current)</span></a></li></li>
      <li @click.prevent="pageJump(pageCount)"><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
      <li class="disabled"><span>当前页: {{nowPage}}</span></li>
      <li class="disabled"><span>总页数: {{pageCount}}</span></li>
    </ul>
    <div class="form-inline left">
      <input type="text" class="form-control page-input" v-model="inputPage" @keyup.enter="pageJump(inputPage)">
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    nowPage: Number,
    pageCount: Number,
    padding: Number
  },
  data () {
    return {
      inputPage: '',
      pages: []
    }
  },
  created () {
    this.updatePages()
  },
  watch: {
    nowPage () {
      this.updatePages()
    }
  },
  methods: {
    updatePages () {
      var nowPage, padding, pageCount, pages
      var i

      nowPage = this.nowPage
      padding = this.padding
      pageCount = this.pageCount
      pages = []

      for (i = nowPage - padding; i <= nowPage + padding; i++) {
        if (i < 1) continue
        if (i > pageCount) break
        pages.push(i)
      }
      this.pages = pages
    },
    pageJump (page) {
      if (typeof page !== 'number') page = parseInt(page)
      if (page > this.pageCount) return false
      if (page === this.nowPage) return false
      this.$dispatch('page-jump', page)
    }
  }
}
</script>

<style>
.kokoro-pager {
  display: flex;
  justify-content: center;
}
.kokoro-pager .form-control {
  margin: 20px 0;
}
.kokoro-pager .page-input {
  margin-left: 20px;
  width: 50px;
}
</style>
