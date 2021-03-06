## Node Package 镜像

### `.yarnrc` 配置

> @scope:registry 配置自定义的源

```
registry "https://registry.npm.taobao.org"
disturl "https://npm.taobao.org/dist"
nvm_nodejs_org_mirror "https://npm.taobao.org/mirrors/node"
NODEJS_ORG_MIRROR "https://npm.taobao.org/mirrors/node"
sass_binary_site "https://npm.taobao.org/mirrors/node-sass"
electron_mirror "https://npm.taobao.org/mirrors/electron"
SQLITE3_BINARY_SITE "https://npm.taobao.org/mirrors/sqlite3"
profiler_binary_host_mirror "https://npm.taobao.org/mirrors/node-inspector"
node_inspector_cdnurl "https://npm.taobao.org/mirrors/node-inspector"
selenium_cdnurl "https://npm.taobao.org/mirrors/selenium"
puppeteer_download_host "https://npm.taobao.org/mirrors"
chromedriver_cdnurl "https://npm.taobao.org/mirrors/chromedriver"
operadriver_cdnurl "https://npm.taobao.org/mirrors/operadriver"
phantomjs_cdnurl "https://npm.taobao.org/mirrors/phantomjs"
fse_binary_host_mirror "https://npm.taobao.org/mirrors/fsevents"
```

### `.npmrc`

> @scope:registry 配置自定义的源

> 代理配置
> npm config set proxy 
> npm config set https-proxy

```
registry="https://registry.npm.taobao.org"
disturl="https://npm.taobao.org/dist"
nvm_nodejs_org_mirror="https://npm.taobao.org/mirrors/node"
nodejs_org_mirror="https://npm.taobao.org/mirrors/node"
sass_binary_site="https://npm.taobao.org/mirrors/node-sass"
electron_mirror="https://npm.taobao.org/mirrors/electron/"
SQLITE3_BINARY_SITE="https://npm.taobao.org/mirrors/sqlite3"
profiler_binary_host_mirror="https://npm.taobao.org/mirrors/node-inspector/"
node_inspector_cdnurl="https://npm.taobao.org/mirrors/node-inspector"
selenium_cdnurl="https://npm.taobao.org/mirrors/selenium"
puppeteer_download_host="https://npm.taobao.org/mirrors"
chromedriver_cdnurl="https://npm.taobao.org/mirrors/chromedriver"
operadriver_cdnurl="https://npm.taobao.org/mirrors/operadriver"
phantomjs_cdnurl="https://npm.taobao.org/mirrors/phantomjs"
fse_binary_host_mirror="https://npm.taobao.org/mirrors/fsevents"

```

### 资源
- Node.js, npm Mirrors [https://npm.taobao.org/mirrors/](https://npm.taobao.org/mirrors/)
- 国内镜像源整理 | 前端开发者说 [https://huixisheng.github.io/%2Fmirror%2F](https://huixisheng.github.io/%2Fmirror%2F)
- i5ting/yrm: YARN registry manager, fast switch between different registries: npm, cnpm, nj, taobao [https://github.com/i5ting/yrm](https://github.com/i5ting/yrm)
- Pana/nrm: NPM registry manager, fast switch between different registries: npm, cnpm, nj, taobao [https://github.com/Pana/nrm](https://github.com/Pana/nrm)


### 常见问题解决办法
- 解决 node-gyp rebuild 时的假死问题 - 风の愿 [https://breeswish.org/blog/2014/11/14/node-gyp-rebuild-freeze/](https://breeswish.org/blog/2014/11/14/node-gyp-rebuild-freeze/)
- envvars | Yarn [https://yarnpkg.com/en/docs/envvars](https://yarnpkg.com/en/docs/envvars)
- mapbox/node-pre-gyp: Node.js tool for easy binary deployment of C++ addons [https://github.com/mapbox/node-pre-gyp#download-binary-files-from-a-mirror](https://github.com/mapbox/node-pre-gyp#download-binary-files-from-a-mirror)
- 安装依赖时遇到 `node-gyp` 权限的问题可以加上 `--unsafe-perm` 配置 gyp WARN EACCES user "root" does not have permission to access the dev dir "/root/.node-gyp/4.2.2" · Issue #405 · nfarina/homebridge [https://git.io/fjjy5](https://git.io/fjjy5)
- NPM添加二进制文件镜像地址 – 奔霸 [https://www.runjf.com/nodejs/npm-add-binary-mirror](https://www.runjf.com/nodejs/npm-add-binary-mirror) `npm view node-pre-gyp`
- 搭建 NPM Proxy 之预编译包 - WAYJAM [https://wayjam.me/post/internal-npm-proxy-prebuild-package.md](https://wayjam.me/post/internal-npm-proxy-prebuild-package.md)
- gucong3000/mirror-config-china: Mirrors in China about node.js [https://github.com/gucong3000/mirror-config-china](https://github.com/gucong3000/mirror-config-china)


## 镜像资源

- RubyGems 镜像 - Ruby China [https://gems.ruby-china.com/](https://gems.ruby-china.com/)
- 阿里巴巴开源镜像站 [https://opsx.alibaba.com/mirror](https://opsx.alibaba.com/mirror) 试用了下感觉效果还不错
- 欢迎访问网易开源镜像站 [http://mirrors.163.com/](http://mirrors.163.com/)
- 清华大学开源软件镜像站 | Tsinghua Open Source Mirror [https://mirrors.tuna.tsinghua.edu.cn/](https://mirrors.tuna.tsinghua.edu.cn/)
- 华为开源镜像站_软件开发服务_华为云 [https://mirrors.huaweicloud.com/](https://mirrors.huaweicloud.com/)
- 腾讯软件源 [https://mirrors.cloud.tencent.com/](https://mirrors.cloud.tencent.com/)
- 国内开源镜像站点汇总 chinese-opensource-mirror-site: 国内开源镜像站点汇总 [https://gitee.com/gsls200808/chinese-opensource-mirror-site](https://gitee.com/gsls200808/chinese-opensource-mirror-site)
- 国内镜像源整理 | 前端开发者说 [https://huixisheng.github.io/%2Fmirror%2F](https://huixisheng.github.io/%2Fmirror%2F)
- 阿里云容器镜像服务 [https://cr.console.aliyun.com/cn-hangzhou/instances/repositories](https://cr.console.aliyun.com/cn-hangzhou/instances/repositories)