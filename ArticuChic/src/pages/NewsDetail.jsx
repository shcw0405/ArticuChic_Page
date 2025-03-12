import {
  Container,
  Typography,
  Box,
  Divider,
  Paper,
  Chip,
  Button,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useState, useEffect } from "react";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);

  // 模拟新闻数据
  useEffect(() => {
    // 模拟新闻数据
    const newsData = {
      1: {
        title: "Our Official Website is Now Live!",
        date: "March 13, 2025",
        category: "Key Milestones",
        image: new URL("../assets/page.png", import.meta.url).href,
        content: `
          We are excited to announce the launch of our official website! This marks a significant milestone in our journey to make ArticuChic more accessible to our community.

          What's New:
          • Modern, user-friendly interface
          • Comprehensive project documentation
          • Regular news updates
          • Team member profiles
          • Project progress tracking

          Future Updates:
          In the coming weeks, we will be adding more features and content to enhance your experience:
          • Detailed project roadmap
          • Interactive demonstrations
          • Community feedback section
          • Technical documentation
          
          We invite you to explore our website and stay tuned for more updates as we continue to develop and improve ArticuChic.
        `,
      },
      2: {
        title: "ArticuChic Project Officially Launched",
        date: "March 5, 2025",
        category: "Key Milestone",
        image: new URL("../assets/OIP.jpg", import.meta.url).href,
        content: `
          Today marks the official launch of the ArticuChic project! After months of planning and preparation, we are thrilled to announce that our team is now fully formed and ready to begin this exciting journey.

          Team Formation:
          • Project Lead: Experienced in system architecture and team management
          • Frontend Developers: Skilled in React and modern web technologies
          • Backend Developers: Proficient in server-side development
          • UI/UX Designers: Focused on creating intuitive user experiences

          Initial Goals:
          1. Requirements Analysis (March 5 - March 19)
          2. System Design (March 20 - April 10)
          3. Development Phase (April 11 - May 1)
          4. Testing and Deployment (May 2 - May 7)

          We are committed to delivering a high-quality product that will revolutionize the way we think about articulation and design. Stay tuned for regular updates on our progress!
        `,
      },
    };

    setNewsItem(newsData[id]);
  }, [id]);

  if (!newsItem) {
    return (
      <Container maxWidth="lg">
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box mb={6}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/news")}
          sx={{ mb: 3 }}
        >
          Back to News
        </Button>

        <Typography variant="h3" component="h1" gutterBottom>
          {newsItem.title}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Chip label={newsItem.category} color="primary" />
          <Typography variant="subtitle1" color="text.secondary">
            {newsItem.date}
          </Typography>
        </Box>
        <Divider sx={{ mb: 4 }} />

        {/* 新闻内容 */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Box
            component="img"
            src={newsItem.image}
            alt={newsItem.title}
            sx={{
              width: "100%",
              height: 400,
              objectFit: "cover",
              borderRadius: 1,
              mb: 4,
            }}
          />
          {newsItem.content.split("\n").map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              paragraph
              sx={{
                whiteSpace: "pre-line",
                mb: 2,
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Paper>
      </Box>
    </Container>
  );
};

export default NewsDetail;
