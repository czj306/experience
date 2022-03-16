# frontend

## apps tree

```bash
.
├── README.md
├── app
├── build
├── components
├── deploy
├── docs
├── mock
├── test
└── utils
```

### apps description

- app：项目库
- build：编译文件
- components：组件库
- deploy：自动持续化部署配置文件
- docs：使用文档
- mock：数据模拟库
- test：测试用例
- utils：工具库

<!-- ### Design Overview -->


### 环境配置实现
> 左侧的文件比右侧的文件具有更高的优先级：

```bash
npm start: .env.development.local, .env.development, .env.local, .env
npm run build: .env.production.local, .env.production, .env.local, .env
npm test: .env.test.local, .env.test, .env (注意没有 .env.local )
```