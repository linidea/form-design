# 介绍

- 表单设计器: 本项目是一款基于 Avue.js 的表单设计器,通过 JSON 配置来生成表单

## 依赖

```yaml
node 16.20.2
vue 2.6.14
avue 2.12.2
sass-loader 10.1.1
element-ui 2.15.14
```

## 快速开始

```sh
npm install
npm run serve
```

## 注意事项

- 本地开发相关
    - 推荐使用 yarn 命令运行与打包
- 发布部署相关
    - 打包命令需要区分环境(生产:prod, 开发:dev)
    - 通过 process.env.NODE_ENV === 'production' 判断是否为生产环境，如果是则使用cdn引入，否则使用本地引入
    - 生产环境的 index.html 中的 cdn 依赖需要版本号
    - element-ui 的 css 版本与 js 版本一定要保持一致
        - element-ui 2.15.14 的全局变量为 ELEMENT 不是 ElementUI(config.externals 中的配置容易出错),
          详情可以通过控制台查看(this 全局变量)


