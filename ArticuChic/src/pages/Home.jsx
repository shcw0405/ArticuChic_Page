import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Divider,
  LinearProgress,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";

const Home = () => {
  // 使用周数作为时间轴
  const weeks = Array.from({ length: 11 }, (_, i) => `Week ${i + 1}`);

  // 修改数据结构，按角色组织任务
  const [roleBasedTasks] = useState([
    {
      id: "1",
      role: "P.M.",
      tasks: [
        {
          id: "task-1-1",
          name: "Requirements Analysis",
          planned: {
            start: 0,
            duration: 3,
          },
          actual: {
            start: 0,
            duration: 3,
          },
          color: "#4CAF50",
        },
      ],
    },
    {
      id: "2",
      role: "Tester",
      tasks: [
        {
          id: "task-2-1",
          name: "Testing",
          planned: {
            start: 7,
            duration: 2,
          },
          actual: {
            start: 7.5,
            duration: 0,
          },
          color: "#9C27B0",
        },
      ],
    },
    {
      id: "3",
      role: "Programmer",
      tasks: [
        {
          id: "task-3-1",
          name: "Frontend Development",
          planned: {
            start: 4,
            duration: 4,
          },
          actual: {
            start: 4.5,
            duration: 0,
          },
          color: "#FF9800",
        },
      ],
    },
    {
      id: "4",
      role: "R.A.",
      tasks: [
        {
          id: "task-4-1",
          name: "System Design",
          planned: {
            start: 2,
            duration: 3,
          },
          actual: {
            start: 2.5,
            duration: 0,
          },
          color: "#2196F3",
        },
      ],
    },
    {
      id: "5",
      role: "S.A.",
      tasks: [
        {
          id: "task-5-1",
          name: "Backend Development",
          planned: {
            start: 4,
            duration: 4,
          },
          actual: {
            start: 4.5,
            duration: 0,
          },
          color: "#F44336",
        },
      ],
    },
    {
      id: "6",
      role: "Developer",
      tasks: [
        {
          id: "task-6-1",
          name: "Deployment",
          planned: {
            start: 8,
            duration: 2,
          },
          actual: {
            start: 8.5,
            duration: 0,
          },
          color: "#795548",
        },
      ],
    },
  ]);

  // 项目任务数据结构
  const [projectTasks] = useState([
    {
      id: "p-1",
      name: "Data",
      planned: {
        start: 0,
        duration: 2,
      },
      actual: {
        start: 0,
        duration: 2,
      },
      color: "#4CAF50",
    },
    {
      id: "p-2",
      name: "Analysis",
      planned: {
        start: 2,
        duration: 4,
      },
      actual: {
        start: 2,
        duration: 0,
      },
      color: "#2196F3",
    },
    {
      id: "p-3",
      name: "UI",
      planned: {
        start: 4,
        duration: 4,
      },
      actual: {
        start: 4,
        duration: 0,
      },
      color: "#FF9800",
    },
    {
      id: "p-4",
      name: "System",
      planned: {
        start: 4,
        duration: 4,
      },
      actual: {
        start: 4,
        duration: 0,
      },
      color: "#F44336",
    },
  ]);

  // 项目特点
  const features = [
    {
      title: "Innovative Design",
      description:
        "ArticuChic integrates cutting-edge design concepts, seamlessly blending art and functionality to deliver a unique user experience.",
      image: new URL("../../assets/pjn.jpg", import.meta.url).href,
    },
    {
      title: "Agile Development",
      description:
        "ArticuChic Adopts Agile Development Methodology for Rapid Product Iteration, ensuring flexibility and responsiveness.",
      image: new URL("../../assets/pjn.jpg", import.meta.url).href,
    },
  ];

  return (
    <Container maxWidth="xl" disableGutters sx={{ px: { xs: 2, sm: 3 } }}>
      {/* Project Progress Gantt Chart */}
      <Box mb={6}>
        <Divider sx={{ mb: 4 }} />

        <Typography variant="h3" component="h1" gutterBottom align="center">
          Project Progress
        </Typography>
        <Typography
          variant="subtitle1"
          paragraph
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Tracking the progress and planned milestones of each phase in the
          project.
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Paper elevation={3} sx={{ p: 3, overflow: "hidden", width: "100%" }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Gantt chart of our group
          </Typography>

          {/* 周数时间轴 */}
          <Box sx={{ mt: 4, mb: 2, pl: "25%" }}>
            <Grid container>
              {weeks.map((week, index) => (
                <Grid
                  item
                  key={index}
                  xs={1}
                  sx={{
                    textAlign: "center",
                    borderLeft: "1px dashed #ccc",
                  }}
                >
                  <Typography variant="body2" fontWeight="medium">
                    {week}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* 按角色显示的甘特图 */}
          <Box sx={{ mt: 4 }}>
            {roleBasedTasks.map((roleData) => (
              <Box
                key={roleData.id}
                sx={{ mb: 4, display: "flex", alignItems: "center" }}
              >
                {/* 角色名称 */}
                <Box sx={{ width: "25%", pr: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {roleData.role}
                  </Typography>
                </Box>

                {/* 甘特图条形图区域 */}
                <Box sx={{ width: "75%", position: "relative", height: 40 }}>
                  {/* 背景网格 */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "100%",
                      display: "flex",
                    }}
                  >
                    {weeks.map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          flex: "0 0 10%",
                          borderLeft: "1px dashed #eee",
                          backgroundColor:
                            index % 2 === 0 ? "#f9f9f9" : "transparent",
                        }}
                      />
                    ))}
                  </Box>

                  {/* 该角色的所有任务 */}
                  {roleData.tasks.map((task) => (
                    <React.Fragment key={task.id}>
                      {/* 计划进度条 - 带有任务名称 */}
                      <Tooltip title={task.name} arrow placement="top">
                        <Box
                          sx={{
                            position: "absolute",
                            height: 12,
                            bottom: 2,
                            left: `${task.planned.start * 10}%`,
                            width: `${task.planned.duration * 10}%`,
                            backgroundColor: task.color + "40",
                            borderRadius: 1,
                            border: `1px solid ${task.color}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "default",
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#000",
                              fontSize: "0.6rem",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              width: "100%",
                              textAlign: "center",
                            }}
                          >
                            {task.name}
                          </Typography>
                        </Box>
                      </Tooltip>

                      {/* 实际进度条 */}
                      <Box
                        sx={{
                          position: "absolute",
                          height: 12,
                          top: 2,
                          left: `${task.actual.start * 10}%`,
                          width: `${task.actual.duration * 10}%`,
                          backgroundColor: task.color,
                          borderRadius: 1,
                        }}
                      />
                    </React.Fragment>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          {/* 图例 */}
          <Box sx={{ mt: 4, display: "flex", gap: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 24,
                  height: 12,
                  backgroundColor: "#2196F3",
                  mr: 1,
                  borderRadius: 1,
                }}
              />
              <Typography variant="body2">Actual Progress</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 24,
                  height: 12,
                  backgroundColor: "#2196F340",
                  border: "1px solid #2196F3",
                  mr: 1,
                  borderRadius: 1,
                }}
              />
              <Typography variant="body2">Planned Progress</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Project Tasks Gantt Chart */}
      <Box mb={6}>
        <Paper elevation={3} sx={{ p: 3, overflow: "hidden", width: "100%" }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Gantt chart of our project
          </Typography>

          {/* 周数时间轴 */}
          <Box sx={{ mt: 4, mb: 2, pl: "25%" }}>
            <Grid container>
              {weeks.map((week, index) => (
                <Grid
                  item
                  key={index}
                  xs={1}
                  sx={{
                    textAlign: "center",
                    borderLeft: "1px dashed #ccc",
                  }}
                >
                  <Typography variant="body2" fontWeight="medium">
                    {week}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* 按任务显示的甘特图 */}
          <Box sx={{ mt: 4 }}>
            {projectTasks.map((task) => (
              <Box
                key={task.id}
                sx={{ mb: 4, display: "flex", alignItems: "center" }}
              >
                {/* 任务名称 */}
                <Box sx={{ width: "25%", pr: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {task.name}
                  </Typography>
                </Box>

                {/* 甘特图条形图区域 */}
                <Box sx={{ width: "75%", position: "relative", height: 40 }}>
                  {/* 背景网格 */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "100%",
                      display: "flex",
                    }}
                  >
                    {weeks.map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          flex: "0 0 10%",
                          borderLeft: "1px dashed #eee",
                          backgroundColor:
                            index % 2 === 0 ? "#f9f9f9" : "transparent",
                        }}
                      />
                    ))}
                  </Box>

                  {/* 计划进度条 - 带有任务名称 */}
                  <Tooltip title={task.name} arrow placement="top">
                    <Box
                      sx={{
                        position: "absolute",
                        height: 12,
                        bottom: 2,
                        left: `${task.planned.start * 10}%`,
                        width: `${task.planned.duration * 10}%`,
                        backgroundColor: task.color + "40",
                        borderRadius: 1,
                        border: `1px solid ${task.color}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "default",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#000",
                          fontSize: "0.6rem",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        {task.name}
                      </Typography>
                    </Box>
                  </Tooltip>

                  {/* 实际进度条 */}
                  <Box
                    sx={{
                      position: "absolute",
                      height: 12,
                      top: 2,
                      left: `${task.actual.start * 10}%`,
                      width: `${task.actual.duration * 10}%`,
                      backgroundColor: task.color,
                      borderRadius: 1,
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>

          {/* 图例 */}
          <Box sx={{ mt: 4, display: "flex", gap: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 24,
                  height: 12,
                  backgroundColor: "#2196F3",
                  mr: 1,
                  borderRadius: 1,
                }}
              />
              <Typography variant="body2">Actual Progress</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 24,
                  height: 12,
                  backgroundColor: "#2196F340",
                  border: "1px solid #2196F3",
                  mr: 1,
                  borderRadius: 1,
                }}
              />
              <Typography variant="body2">Planned Progress</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Project Features */}
      <Box mb={6}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Project Features
        </Typography>
        <Typography
          variant="subtitle1"
          paragraph
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Discover the unique features and capabilities of the ArticuChic
          project.
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={12} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
