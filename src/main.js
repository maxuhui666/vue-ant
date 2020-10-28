import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import http from './http/http';
import api from './http/api';
import {message} from 'ant-design-vue';
import './http/axios';
import './assets/style.scss';
import 'ant-design-vue/dist/antd.css';

const app=createApp(App);

app.use(store);
app.use(router);
app.use(Antd);
app.mount('#app');

// 配置全局属性
app.config.globalProperties.$message = message;
app.config.globalProperties.$http=http;
app.config.globalProperties.$api=api;

