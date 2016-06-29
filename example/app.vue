<template>
  <pagination prefix-cls="ant-pagination" :current="nowPage" :total="total" :on-change="jumpTo">
    <span slot="showTotal">共 {{total}} 条</span>
  </pagination>
</template>

<script>
  import Pagination from '../lib/index';
  import './pagination';

  export default {
    name: 'app',

    components: {
      Pagination
    },

    data() {
      return {
        total: 100,
        nowPage: 1
      };
    },

    methods: {
      jumpTo(page) {
        this.nowPage = page;
      }
    }
  };
</script>

<style lang="less">
@primary-color: #2db7f5;
</style>
