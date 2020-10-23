<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import http from './http/http';
import api from './http/api';

export default {
  provide() {
    return {
      http: http,
      api: api,
    };
  },
};
</script>

<style lang="scss">

</style>
