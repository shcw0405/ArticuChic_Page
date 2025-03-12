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
import { useState } from "react";

const News = () => {
  const [news] = useState([
    {
      id: 1,
      title: "ArticuChic Project Officially Launched",
      date: "January 15, 2023",
      summary:
        "After multiple rounds of discussions and preparations, the ArticuChic project has officially kicked off today. This innovative initiative aims to create a platform that seamlessly integrates art and technology, offering users a unique and inspiring experience.",
      image: "/src/assets/pjn.jpg",
      category: "Project Updates",
    },
    {
      id: 2,
      title: "Design Phase Completed, Moving into Development",
      date: "February 28, 2023",
      summary:
        "After over a month of dedicated effort, the design phase of the ArticuChic project has been successfully completed. The team is now transitioning into the development phase, which is expected to last for approximately three months.",
      image: "/src/assets/pjn.jpg",
      category: "latest progress",
    },
  ]);

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
          <CardActionArea>
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
              <CardActionArea>
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
