# DevCard Template 07 - GitHub Style Portfolio

一个现代化的GitHub风格个人作品集模板，灵感来源于 [awesome-github-profile-readme](https://github.com/abhisheknaiidu/awesome-github-profile-readme) 项目中最受欢迎的设计元素。

## ✨ 特色功能

### 🎨 视觉设计
- **GitHub风格界面** - 仿照GitHub的设计语言
- **代码雨背景** - 动态的Matrix风格背景动画
- **亮色/暗色主题** - 支持主题切换，保存用户偏好
- **响应式设计** - 完美适配桌面、平板和移动设备
- **平滑动画** - 丰富的CSS动画和过渡效果

### 💻 交互功能
- **打字机效果** - 终端命令的动态打字动画
- **代码高亮** - 语法高亮的代码展示
- **贡献图表** - GitHub风格的活动热力图
- **统计动画** - 数字计数器动画效果
- **浮动图标** - 技术栈图标的浮动动画

### 🚀 技术特性
- **纯原生技术** - 无框架依赖，使用原生HTML/CSS/JavaScript
- **模块化架构** - 清晰的类结构，易于维护和扩展
- **性能优化** - 懒加载、动画暂停等性能优化
- **键盘快捷键** - Ctrl+1-5 快速导航
- **彩蛋功能** - 隐藏的Konami代码彩蛋

## 📁 文件结构

```
template07/
├── index.html          # 主HTML文件
├── styles.css          # 样式文件
├── script.js           # JavaScript逻辑
└── README.md           # 说明文档
```

## 🎯 页面结构

### 1. Home (首页)
- 个人头像和基本信息
- 动态打字机效果的终端命令
- 浮动的技术栈图标
- 社交媒体链接

### 2. About (关于)
- 代码风格的自我介绍
- 语法高亮的代码块
- 技能标签云
- 复制代码功能

### 3. Projects (项目)
- 项目卡片展示
- GitHub链接和演示链接
- 技术栈标签
- 星标和Fork数统计

### 4. Stats (统计)
- GitHub活动统计
- 贡献热力图
- 编程语言使用比例
- 动画数字计数器

### 5. Contact (联系)
- 联系表单
- 社交媒体链接
- 邮箱和位置信息
- 表单提交动画

## 🛠️ 使用方法

### 1. 基本设置

1. 下载所有文件到本地目录
2. 在浏览器中打开 `index.html`
3. 开始自定义你的内容

### 2. 自定义数据

编辑 `script.js` 文件中的 `mockData` 对象：

```javascript
const mockData = {
  personalInfo: {
    name: '你的姓名',
    username: '@你的用户名',
    bio: '你的简介',
    avatar: '你的头像URL',
    email: '你的邮箱',
    location: '你的位置',
    social: {
      github: 'GitHub链接',
      twitter: 'Twitter链接',
      linkedin: 'LinkedIn链接',
      email: '邮箱链接'
    }
  },
  // ... 其他配置
};
```

### 3. 自定义样式

在 `styles.css` 中修改CSS变量来调整主题色彩：

```css
:root {
  --primary-bg: #0d1117;        /* 主背景色 */
  --secondary-bg: #161b22;      /* 次要背景色 */
  --accent-color: #238636;      /* 强调色 */
  --text-primary: #f0f6fc;      /* 主要文字色 */
  --text-secondary: #8b949e;    /* 次要文字色 */
}
```

## ⌨️ 键盘快捷键

- `Ctrl + 1` - 跳转到首页
- `Ctrl + 2` - 跳转到关于页面
- `Ctrl + 3` - 跳转到项目页面
- `Ctrl + 4` - 跳转到统计页面
- `Ctrl + 5` - 跳转到联系页面
- `↑↑↓↓←→←→BA` - Konami代码彩蛋

## 🎨 主题切换

点击右上角的主题切换按钮可以在亮色和暗色主题之间切换。主题偏好会自动保存到本地存储。

## 📱 响应式设计

模板支持以下断点：
- **桌面**: > 1024px
- **平板**: 768px - 1024px
- **手机**: < 768px

## 🔧 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代CSS特性（Grid、Flexbox、动画）
- **JavaScript ES6+** - 模块化类结构
- **Font Awesome** - 图标库
- **Google Fonts** - 字体

## 🚀 性能优化

- **懒加载** - 图片和动画的懒加载
- **动画暂停** - 标签页不可见时暂停动画
- **事件委托** - 优化事件监听器
- **防抖节流** - 滚动和resize事件优化

## 🎯 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 许可证

MIT License - 可自由使用、修改和分发

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个模板！

## 📞 支持

如果你喜欢这个模板，请给个⭐️支持一下！

---

**灵感来源**: [awesome-github-profile-readme](https://github.com/abhisheknaiidu/awesome-github-profile-readme)

**作者**: SeiFox  
**版本**: 1.0.0  
**更新时间**: 2024年