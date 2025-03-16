import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import newsRegistry from "../../../news/NewsRegistration";

const News = () => {
  const navigate = useNavigate();
  // 从注册表中提取新闻信息并按日期倒序排序
  const [newsItems] = useState(() => {
    // 获取所有新闻信息
    const items = Object.values(newsRegistry).map((item) => item.info);

    // 尝试按日期倒序排序（最新的排在前面）
    // 首先尝试将日期转换为统一格式进行比较
    return items.sort((a, b) => {
      try {
        // 尝试解析日期，如果是标准格式（如 2024-03-15）或常见格式
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        // 检查日期是否有效，如果无效则按原顺序保留
        if (isNaN(dateA) || isNaN(dateB)) return 0;

        // 按日期倒序（最新的在前）
        return dateB - dateA;
      } catch (e) {
        // 如果日期比较出错，保持原顺序
        return 0;
      }
    });
  });

  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <Container maxWidth="lg">
      <Box mb={6}>
        <Divider sx={{ mb: 4 }} />

        <Typography variant="h3" component="h1" gutterBottom align="center">
          Project News
        </Typography>
        <Typography
          variant="subtitle1"
          paragraph
          align="center"
          color="text.secondary"
        >
          Stay Updated on the Latest Developments and Progress of the ArticuChic
          Project
        </Typography>
        <Divider sx={{ mb: 4 }} />
      </Box>

      {/* 新闻列表 - 所有新闻统一样式，倒序展示（最新的在前面） */}
      <Grid container spacing={4}>
        {newsItems.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardActionArea onClick={() => handleNewsClick(item.id)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >
                    <Chip label={item.category} color="primary" size="small" />
                    <Typography variant="body2" color="text.secondary">
                      {item.date}
                    </Typography>
                  </Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {item.summary}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Author: {item.author}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default News;
