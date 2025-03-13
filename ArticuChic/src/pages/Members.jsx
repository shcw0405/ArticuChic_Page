import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Divider,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// 修改 SchoolLogo 样式组件
const SchoolLogo = styled("img")({
  width: "24px",
  height: "24px",
  objectFit: "contain",
  display: "block", // 确保图片正确对齐
});

const SchoolInfo = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  marginTop: "8px",
  "& span": {
    fontSize: "0.875rem",
  },
});

const Members = () => {
  const teamMembers = [
    {
      id: 1,
      name: "蔡旭",
      role: "Leader",
      bio: "Life's a struggle, but love can.",
      avatar: new URL("../assets/head.jpg", import.meta.url).href,
      social: {
        github: "https://github.com/shcw0405",
      },
      email: "1026343326@qq.com",
      school: {
        logo: new URL("../assets/Jilin.png", import.meta.url).href,
      },
    },
    {
      id: 2,
      name: "吴博睿",
      role: "Undefined",
      bio: "在读学生，主修计算机科学，热衷于学习编程和软件开发。",
      avatar: new URL("../assets/vio.jpg", import.meta.url).href,
      social: {
        github: "https://github.com/Violesa",
      },
      email: "violesa12138@gmail.com",
      school: {
        logo: new URL("../assets/Jilin.png", import.meta.url).href,
      },
    },
    {
      id: 3,
      name: "朱元武",
      role: "Undefined",
      bio: "something for nothing",
      avatar: new URL("../assets/zhu.jpg", import.meta.url).href,
      social: {
        github: "https://github.com/zzyuanyi",
        linkedin: "",
        twitter: "2649157045@qq.com",
      },
      email: "2649157045@qq.com",
      school: {
        logo: new URL("../assets/Jilin.png", import.meta.url).href,
      },
    },
    {
      id: 4,
      name: "杨功渤",
      role: "Undefined",
      bio: "I hava 3 years of programming experience, and uses C# C++ language. I hava been involved in Unity projects. I am better at project framework design",
      avatar: new URL("../assets/yang.jpg", import.meta.url).href,
      social: {
        github: "",
        linkedin: "",
        twitter: "2735567415@qq.com",
      },
      email: "2735567415@qq.com",
      school: {
        logo: new URL("../assets/Jilin.png", import.meta.url).href,
      },
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box mb={6}>
        <Divider sx={{ mb: 4 }} />

        <Typography variant="h3" component="h1" gutterBottom align="center">
          Team Members
        </Typography>
        <Typography
          variant="subtitle1"
          paragraph
          align="center"
          color="text.secondary"
        >
          Meet the Talented Team Behind ArticuChic{" "}
        </Typography>
        <Divider sx={{ mb: 4 }} />
      </Box>

      {/* 团队介绍 */}
      <Box mb={6}>
        <Typography variant="body1" paragraph align="center">
          The ArticuChic team is composed of passionate and creative
          professionals, each bringing extensive experience and expertise in
          their respective fields. We believe that a diverse team background and
          close collaboration are key to the project's success. Together, our
          team is committed to making ArticuChic a benchmark product within the
          industry.{" "}
        </Typography>
      </Box>

      {/* 团队成员卡片 */}
      <Grid container spacing={4}>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  gutterBottom
                  align="center"
                >
                  {member.role}
                </Typography>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" paragraph>
                  {member.bio}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  mt={2}
                >
                  <IconButton>
                    <SchoolLogo src={member.school.logo} alt="school logo" />
                  </IconButton>
                  <IconButton
                    aria-label="github"
                    href={member.social.github}
                    target="_blank"
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    aria-label="email"
                    href={`mailto:${member.email}`}
                  >
                    <i className="fas fa-envelope"></i>
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Members;
