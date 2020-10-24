<template>
  <div id="app">
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
