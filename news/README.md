# 新闻发布系统使用说明

## 目录结构

```
news/
├── NewsTemplate.jsx       # 新闻模板文件
├── NewsRegistration.js    # 新闻注册中心 - 不需要手动修改！
├── README.md              # 使用说明文档
├── styles.css             # 新闻样式
│
├── authors/               # 按作者组织的新闻
│   ├── index.js           # 作者索引
│   ├── cx/                # 蔡旭的新闻
│   │   └── index.js       # 蔡旭的新闻索引
│   ├── admin/             # 管理员的新闻
│   │   └── index.js       # 管理员的新闻索引
│   └── ...                # 其他作者
│
└── [各作者的新闻文件].jsx  # 各个新闻组件文件
```

## 如何发布新闻（按作者组织）

### 1. 为新作者创建文件夹（首次）

如果是新作者第一次添加新闻，需要以下步骤：

1. **创建作者文件夹**

   - 在 `news/authors/` 下创建作者文件夹，如 `news/authors/yourname/`
   - 在该文件夹下创建 `index.js` 文件，参考其他作者的格式

2. **注册作者**

   - 在 `news/authors/index.js` 中添加新作者：
     ```javascript
     export { default as yourname } from "./yourname/index"; // 您的名字的新闻
     ```

### 2. 创建新闻文件

1. **准备文件**

   - 复制 `NewsTemplate.jsx` 文件
   - 将文件重命名为有意义的名称（例如：`yourname-news1.jsx`）
   - 将图片文件放在 `ArticuChic/src/assets/news/` 目录下
   - 将下载文件放在 `public/downloads/` 目录下

2. **编辑新闻内容**

   - 打开新创建的新闻文件
   - 修改以下基本信息：
     ```javascript
     const title = "新闻标题";
     const date = "2024-03-15"; // 建议使用YYYY-MM-DD格式
     const author = "作者名称";
     ```
   - 在 `news-content` 部分编写新闻正文
   - 添加图片（可选）：
     ```javascript
     const images = [
       {
         src: new URL(
           "../ArticuChic/src/assets/news/图片名称.jpg",
           import.meta.url
         ).href,
         alt: "图片描述",
         caption: "图片说明文字",
       },
     ];
     ```
   - 添加下载文件（可选）：
     ```javascript
     const downloads = [
       {
         name: "文件名.pdf",
         url: "/downloads/文件路径.pdf",
         description: "文件描述",
       },
       // 如果文件在src/assets中而不是public中，使用以下格式：
       {
         name: "资源文件.pdf",
         url: new URL("../ArticuChic/src/assets/文档名称.pdf", import.meta.url)
           .href,
         description: "资源文件描述",
       },
     ];
     ```

### 3. 在作者索引中注册新闻

1. **打开作者索引文件**

   - 打开 `news/authors/yourname/index.js` 文件

2. **导入新创建的新闻组件**

   - 在文件顶部添加导入语句：
     ```javascript
     import yourNewsFile from "../../yourname-news1";
     ```

3. **注册新闻**

   - 在 `yournameNews` 对象中添加新条目：
     ```javascript
     "unique-news-id": {
       component: yourNewsFile,
       info: {
         id: "unique-news-id",  // 必须与注册键相同
         title: "新闻标题",
         date: "2024-03-15",    // 使用YYYY-MM-DD格式
         summary: "新闻摘要内容...",
         image: new URL("../../../ArticuChic/src/assets/news/your-image.jpg", import.meta.url).href,
         category: "新闻类别",
         author: "您的名字"
       }
     }
     ```

### 4. 完成！

- **系统会自动处理其他部分**
- 新闻会自动出现在新闻列表页面
- 点击新闻卡片会自动导航到详情页面

## 新闻排序说明

- **自动倒序展示**：系统会自动按照日期倒序展示新闻，最新的新闻将显示在最前面
- **无需考虑顺序**：由于新闻会按日期自动排序，您可以直接在作者索引文件的任意位置添加新的新闻条目
- **日期格式重要性**：为确保正确排序，请始终使用标准的 `YYYY-MM-DD` 日期格式

## 文件和图片处理

### 图片引用

- **推荐格式**：
  ```javascript
  src: new URL(
    "../../../ArticuChic/src/assets/news/your-image.jpg",
    import.meta.url
  ).href;
  ```
- **注意路径层级**：在作者索引文件中引用图片时，需要使用三层 `../`

### 文件下载

- **Public 目录中的文件**：

  ```javascript
  url: "/downloads/example.pdf"; // 存放在public/downloads/目录
  ```

- **Assets 目录中的文件**：

  ```javascript
  url: new URL(
    "../../../ArticuChic/src/assets/docs/example.pdf",
    import.meta.url
  ).href;
  ```

## 常见问题

1. **图片无法显示**

   - 检查图片路径是否正确
   - 确认图片已放置在正确的目录中
   - 检查图片文件名是否包含特殊字符
   - 确保使用了正确的 URL 引用格式
   - 注意在作者文件夹中需要使用三层 `../`

2. **下载链接无法访问**

   - Public 目录文件使用绝对路径：`/downloads/example.pdf`
   - Assets 目录文件使用 URL 引用：`new URL(...).href`
   - 确保文件存在且路径正确

3. **新闻不显示在列表中**

   - 检查是否已在作者索引文件中正确注册了新闻
   - 确保作者已在主索引中注册
   - 确保已正确导入新闻组件

4. **新闻排序不正确**

   - 检查日期格式是否为 `YYYY-MM-DD`（如 `2024-03-15`）
   - 确保日期是有效的，无效日期可能导致排序问题

5. **添加新作者后系统报错**

   - 确保按正确的层级创建了文件夹和索引文件
   - 确保在作者主索引中注册了新作者

## 技术支持

如有问题，请联系技术支持团队。
