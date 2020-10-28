export default {
  // 项目列表
  project: {
    // 查询列表
    list: '/ccecc/api/biddingProject/permission/searchProjectInfoByContent',
    // 获取项目下所有文件
    fileList: '/ccecc/api/biddingProject/' +
      'permission/selectProjectFileTreeByProjectId',
    // 获取项目下面的文件结构树
    fileTree: '/ccecc/api/biddingProject' +
      '/permission/selectProjectFileTreeByProjectId',
    // 列出一个目录树下的文件
    fileListByTreeId: '/ccecc/api/biddingProject' +
      '/permission/selectFileInfoByTreeId',
  },
};
