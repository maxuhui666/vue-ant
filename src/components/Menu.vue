<template>
  <div id="menu">
    <a-menu
        mode="inline"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        style="width: 256px"
        @openChange="onOpenChange"
    >
      <a-sub-menu key="sub1">
        <template v-slot:title>
          <span><MailOutlined/><span>Navigation One</span></span>
        </template>
        <a-menu-item key="1">Option 1</a-menu-item>
        <a-menu-item key="2">Option 2</a-menu-item>
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template v-slot:title>
          <span><AppstoreOutlined/><span>Navigation Two</span></span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template v-slot:title>
          <span><SettingOutlined/><span>Navigation Three</span></span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import MenuItem from 'ant-design-vue';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';

export default {
  name: 'Menu',
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  data: function() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
      selectedKeys: [],
    };
  }, methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find((key) =>
        this.openKeys.indexOf(key) === -1,
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
    ,
  },
};
</script>

<style scoped>

</style>
