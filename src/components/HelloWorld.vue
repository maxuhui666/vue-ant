<template>
  <div class="hello">
    <a-row>
      <a-col><p></p></a-col>
    </a-row>
    <a-row>
      <a-col>
        <a-rate v-model:value="value" allow-half />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      value: 2.5,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">

</style>
