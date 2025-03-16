# 新闻发布系统使用说明

## 目录结构

news/
├── NewsTemplate.jsx # 新闻模板文件
├── NewsRegistration.js # 新闻注册中心 - 非常重要！
└── README.md # 使用说明文档

## 如何发布新闻（简化流程）

### 1. 创建新闻文件

1. **准备文件**

   - 复制 `NewsTemplate.jsx` 文件
   - 将文件重命名为有意义的名称（例如：`News20240315.jsx` 或 `ProjectUpdate.jsx`）
   - 将图片和文件放在 `ArticuChic/assets/` 目录下

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
         src: new URL("../ArticuChic/assets/图片名称.jpg", import.meta.url)
           .href,
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
         url: "../ArticuChic/assets/文件名称.pdf",
         description: "文件描述",
       },
     ];
     ```

### 2. 在 NewsRegistration.js 中注册新闻

1. **打开新闻注册文件**

   - 打开 `news/NewsRegistration.js` 文件

2. **导入新创建的新闻组件**

   - 在文件顶部添加导入语句：
     ```javascript
     import YourNews from "./YourNewsFile";
     ```

3. **注册新闻**

   - 在 `newsRegistry` 对象中添加新条目：
     ```javascript
     "your-unique-id": {
       component: YourNews,
       info: {
         id: "your-unique-id",  // 必须与注册ID一致
         title: "新闻标题",
         date: "2024-03-15",    // 重要！使用YYYY-MM-DD格式以确保正确排序
         summary: "新闻摘要内容...",
         image: new URL("../ArticuChic/assets/your-image.jpg", import.meta.url).href,
         category: "新闻类别",
         author: "作者名称"
       }
     }
     ```
   - 确保 `id` 是唯一的，并且与注册键相同
   - **日期格式**：强烈建议使用 `YYYY-MM-DD` 格式（如 `2024-03-15`），以确保新闻能够正确按日期排序
   - `summary` 是在新闻列表中显示的摘要文本
   - `image` 是新闻卡片上显示的封面图片
   - `category` 和 `author` 会在新闻卡片上显示

### 3. 新闻排序说明

- **自动倒序展示**：系统会自动按照日期倒序展示新闻，最新的新闻将显示在最前面
- **无需考虑顺序**：由于新闻会按日期自动排序，您可以直接在 `NewsRegistration.js` 文件的任意位置添加新的新闻条目，无需担心顺序问题
- **日期格式重要性**：为确保正确排序，请始终使用标准的 `YYYY-MM-DD` 日期格式

### 4. 完成！

- **不需要修改任何其他文件**
- 新闻会自动出现在新闻列表页面
- 点击新闻卡片会自动导航到详情页面

## 图片和文件注意事项

1. **图片引用格式**

   - 所有图片必须使用以下格式引用：
     ```javascript
     src: new URL("../ArticuChic/assets/your-image.jpg", import.meta.url).href;
     ```
   - 不要使用直接路径如 `/images/news/example.jpg`

## 常见问题

1. **图片无法显示**

   - 检查图片路径是否正确
   - 确认图片已放置在正确的目录中
   - 检查图片文件名是否包含特殊字符
   - 确保使用了正确的 URL 引用格式

2. **下载链接无法访问**

   - 确认文件已放置在正确目录下
   - 检查文件路径是否正确
   - 确认文件权限设置正确

3. **新闻不显示在列表中**

   - 检查是否已在 `NewsRegistration.js` 中正确注册了新闻
   - 确保注册 ID 与 info 对象中的 id 字段相匹配
   - 确保已正确导入新闻组件

4. **新闻排序不正确**

   - 检查日期格式是否为 `YYYY-MM-DD`（如 `2024-03-15`）
   - 确保日期是有效的，无效日期可能导致排序问题
   - 非标准日期格式可能导致排序不准确

5. **样式问题**

   - 新闻页面样式在 `news/styles.css` 中定义
   - 确保该样式文件已被引入到项目中

## 技术支持

如有问题，请用微信联系蔡旭。
