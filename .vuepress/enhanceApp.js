import Comment from './custom/Comment';
// import Vssue from '@vssue/vuepress-plugin-vssue/lib/enhanceApp.js';

// console.log(Vssue);
// Vssue();

// copy https://github.com/iofu728/blog/blob/master/docs/.vuepress/theme/enhanceApp.js
function getGitalk() {
  const linkGitalk = document.createElement('link');
  linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
  linkGitalk.rel = 'stylesheet';
  document.body.appendChild(linkGitalk);
  const scriptGitalk = document.createElement('script');
  scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
  document.body.appendChild(scriptGitalk);
}

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.component('Comment', Comment);
  try {
    document && getGitalk();
  } catch (e) {
    console.error(e.message);
  }
  // Vue.install(Vssue);
  // console.log('options', options);
  // console.log('router', router);
  // console.log('Vue', Vue);
  // console.log('siteData', siteData);
  // ...做一些其他的应用级别的优化
}