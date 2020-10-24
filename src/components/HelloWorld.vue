<template>
  <div class="hello">
    <a-button v-on:click="getData" type="primary">发送请求</a-button>
    <a-button v-on:click="cleanData" type="danger">清空数据</a-button>
    <p v-for="(item,index) of this.list" v-bind:key="index">
      {{ item.projectName }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      list: [],
    };
  },
  setup: function() {
  },
  inject: ['http', 'api'],
  methods: {
    getData: function() {
      this.http.post(this.api.project.list,
          {pageNumber: 1},
      ).then((response) => {
        this.list = response.data.list;
      });
    },
    cleanData: function() {
      this.list=[];
    },
  },
};
</script>

<style scoped lang="scss">

</style>
