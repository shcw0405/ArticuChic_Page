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
import { useState } from "react";

const News = () => {
  const navigate = useNavigate();
  const [news] = useState([
    {
      id: 1,
      title: "Our Official Website is Now Live!",
      date: "March 13, 2025",
      summary:
        "We're thrilled to announce that our official website has gone live. Discover more about ArticuChic and stay connected with our latest updates.",
      image: new URL("../assets/page.png", import.meta.url).href,
      category: "Key Milestones",
    },
    {
      id: 2,
      title: "ArticuChic Project Officially Launched",
      date: "March 5, 2025",
      summary:
        "Congratulations! The ArticuChic Team is Officially Formed! We will focus on product development, and we look forward to sharing the exciting outcomes from our team in the near future. Stay tuned!",
      image: new URL("../assets/OIP.jpg", import.meta.url).href,
      category: "Key Milestone",
    },
  ]);

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

      {/* 置顶新闻 */}
      <Box mb={6}>
        <Card>
          <CardActionArea onClick={() => handleNewsClick(news[0].id)}>
            <CardMedia
              component="img"
              height="400"
              image={news[0].image}
              alt={news[0].title}
            />
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <Chip label={news[0].category} color="primary" size="small" />
                <Typography variant="body2" color="text.secondary">
                  {news[0].date}
                </Typography>
              </Box>
              <Typography gutterBottom variant="h4" component="h2">
                {news[0].title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {news[0].summary}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      {/* 新闻列表 */}
      <Grid container spacing={4}>
        {news.slice(1).map((item) => (
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
                  <Typography variant="body2">{item.summary}</Typography>
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
