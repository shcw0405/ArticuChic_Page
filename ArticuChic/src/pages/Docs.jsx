import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  Grid,
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
} from "@mui/material";
import {
  Description,
  Code,
  MenuBook,
  Download,
  ArrowRight,
} from "@mui/icons-material";

const Docs = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const docCategories = [
    {
      id: "overview",
      title: "Project Overview",
      icon: <Description />,
      content: [
        { title: "Project Introduction", link: "#intro" },
        { title: "Core Features", link: "#features" },
        { title: "Technical Architecture", link: "#architecture" },
        { title: "Development Plan", link: "#roadmap" },
      ],
    },
    {
      id: "technical",
      title: "Technical Documentation",
      icon: <Code />,
      content: [
        { title: "Development Environment Setup", link: "#dev-setup" },
        { title: "API Documentation", link: "#api-docs" },
        { title: "Component Library", link: "#components" },
        { title: "Data Model", link: "#data-models" },
      ],
    },
    {
      id: "guide",
      title: "User Guide",
      icon: <MenuBook />,
      content: [
        { title: "Quick Start", link: "#quick-start" },
        { title: "Basic Operations", link: "#basic-operations" },
        { title: "Advanced Features", link: "#advanced-features" },
        { title: "FAQ (Frequently Asked Questions)", link: "#faq" },
      ],
    },
  ];

  const downloadableFiles = [
    { name: "Nothing.pdf", size: "0MB", date: "2025-03-15" },
  ];

  return (
    <Container maxWidth="lg">
      <Box mb={6}>
        <Divider sx={{ mb: 4 }} />
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Project Documentation
        </Typography>
        <Typography
          variant="subtitle1"
          paragraph
          align="center"
          color="text.secondary"
        >
          Comprehensive resources to help you fully understand the ArticuChic
          project.
        </Typography>
        <Divider sx={{ mb: 4 }} />
      </Box>

      <Grid container spacing={4}>
        {/* 左侧导航 */}
        <Grid item xs={12} md={3}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={tabValue}
              onChange={handleTabChange}
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              {docCategories.map((category, index) => (
                <Tab
                  key={category.id}
                  label={category.title}
                  icon={category.icon}
                  iconPosition="start"
                  sx={{ alignItems: "flex-start", textAlign: "left", pl: 2 }}
                />
              ))}
            </Tabs>
          </Paper>

          <Paper elevation={2} sx={{ p: 2, mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              <Download sx={{ mr: 1, verticalAlign: "middle" }} />
              Downloadable Documents
            </Typography>
            <List dense>
              {downloadableFiles.map((file, index) => (
                <ListItem
                  key={index}
                  button
                  component={Link}
                  href="#"
                  underline="none"
                >
                  <ListItemText
                    primary={file.name}
                    secondary={`${file.size} · ${file.date}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* 右侧内容 */}
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
              {docCategories[tabValue].title}
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <List>
              {docCategories[tabValue].content.map((item, index) => (
                <ListItem key={index} sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <ArrowRight color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" paragraph sx={{ mt: 1 }}>
                      {index === 0 && tabValue === 0 && (
                        <>
                          ArticuChic is a groundbreaking project that seamlessly
                          blends art and technology, offering users a unique
                          visual experience and innovative interaction methods.
                        </>
                      )}
                      {index === 1 && tabValue === 0 && <>Nothing here.</>}
                      {index === 0 && tabValue === 1 && (
                        <>
                          To begin contributing to ArticuChic, developers need
                          to install Node.js , npm or yarn , and clone the
                          project repository.
                        </>
                      )}
                      {index === 0 && tabValue === 2 && (
                        <>
                          For new users, our Quick Start Guide offers an
                          accelerated path to understanding ArticuChic’s
                          essential features and operational workflows.
                        </>
                      )}
                      {!(
                        ((index === 0 || index === 1) && tabValue === 0) ||
                        (index === 0 && (tabValue === 1 || tabValue === 2))
                      ) && <>Click here to view detailed content...</>}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Docs;
