项目采用 monorepo模式管理,使用了vite + electron + vue3 框架
主要功能对接金瑞铭RFly-I160设备
pnpm 导致d.ts中@vue/runtime-core 申明失效问题解决方案 #https://juejin.cn/post/7174751095795744824
#### 调试
在项目根目录使用 `pnpm run dev`

生产环境的log文件位置
在 Windows 上： %USERPROFILE%\AppData\Roaming\{app name}\logs\main.log