<template>
  <div class="hello">
    <a-button v-on:click="getData">发送请求</a-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {};
  },
  inject: ['http', 'api'],
  methods: {
    getData: function() {
      this.http.post(this.api.project.list, {pageNumber: 1}).then((response)=>{
        console.log(response.data);
      });
    },
  },
};
</script>

<style scoped lang="scss">

</style>
