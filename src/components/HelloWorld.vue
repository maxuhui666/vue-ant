<template>
  <div class="hello">
    <h1 v-if="show">{{ msg }}</h1>
    <a-button v-on:click="switchMsg('22')">点击隐藏</a-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      msg: 'hello',
      show: true,
    };
  },
  methods: {
    switchMsg: function(ss) {
      this.$message.success(ss);
      this.show=!this.show;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
