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
      tasks: [
        {
          id: "data-1",
          name: "Requirement Analysis",
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
        {
          id: "data-2",
          name: "API Development",
          planned: {
            start: 2,
            duration: 0,
          },
          actual: {
            start: 2,
            duration: 0,
          },
          color: "#4CAF50",
        },
        {
          id: "data-3",
          name: "Data Processing",
          planned: {
            start: 4,
            duration: 0,
          },
          actual: {
            start: 4,
            duration: 0,
          },
          color: "#4CAF50",
        },
        {
          id: "data-4",
          name: "Data Maintenance",
          planned: {
            start: 7,
            duration: 0,
          },
          actual: {
            start: 7,
            duration: 0,
          },
          color: "#4CAF50",
        },
      ],
    },
    {
      id: "p-2",
      name: "Analysis",
      tasks: [
        {
          id: "analysis-1",
          name: "Requirement Analysis",
          planned: {
            start: 0,
            duration: 3,
          },
          actual: {
            start: 0,
            duration: 3,
          },
          color: "#2196F3",
        },
        {
          id: "analysis-2",
          name: "Core Algorithm Dev",
          planned: {
            start: 3,
            duration: 0,
          },
          actual: {
            start: 3,
            duration: 0,
          },
          color: "#2196F3",
        },
        {
          id: "analysis-3",
          name: "Model Optimization",
          planned: {
            start: 6,
            duration: 0,
          },
          actual: {
            start: 6,
            duration: 0,
          },
          color: "#2196F3",
        },
        {
          id: "analysis-4",
          name: "Performance Testing",
          planned: {
            start: 8,
            duration: 0,
          },
          actual: {
            start: 8,
            duration: 0,
          },
          color: "#2196F3",
        },
      ],
    },
    {
      id: "p-3",
      name: "UI",
      tasks: [
        {
          id: "ui-1",
          name: "Requirement Analysis",
          planned: {
            start: 0,
            duration: 3,
          },
          actual: {
            start: 0,
            duration: 3,
          },
          color: "#FF9800",
        },
        {
          id: "ui-2",
          name: "Component Development",
          planned: {
            start: 3,
            duration: 0,
          },
          actual: {
            start: 3,
            duration: 0,
          },
          color: "#FF9800",
        },
        {
          id: "ui-3",
          name: "Integration with API",
          planned: {
            start: 5,
            duration: 0,
          },
          actual: {
            start: 5,
            duration: 0,
          },
          color: "#FF9800",
        },
        {
          id: "ui-4",
          name: "User Testing & Refinement",
          planned: {
            start: 7,
            duration: 0,
          },
          actual: {
            start: 7,
            duration: 0,
          },
          color: "#FF9800",
        },
      ],
    },
    {
      id: "p-4",
      name: "System",
      tasks: [
        {
          id: "system-1",
          name: "Requirement Analysis",
          planned: {
            start: 0,
            duration: 3,
          },
          actual: {
            start: 0,
            duration: 3,
          },
          color: "#F44336",
        },
        {
          id: "system-2",
          name: "Core Services Dev",
          planned: {
            start: 2,
            duration: 3,
          },
          actual: {
            start: 2,
            duration: 0,
          },
          color: "#F44336",
        },
        {
          id: "system-3",
          name: "Integration & Testing",
          planned: {
            start: 5,
            duration: 2,
          },
          actual: {
            start: 5,
            duration: 0,
          },
          color: "#F44336",
        },
        {
          id: "system-4",
          name: "Deployment & Monitoring",
          planned: {
            start: 7,
            duration: 3,
          },
          actual: {
            start: 7,
            duration: 0,
          },
          color: "#F44336",
        },
      ],
    },
  ]);

  // 项目里程碑
  const [milestones] = useState([
    {
      id: "m-1",
      name: "基础模型v0 & 基本文档",
      description: "数据链路跑通的基础模型v0以及基本文档",
      week: 5,
      color: "#673AB7",
      completed: false,
    },
    {
      id: "m-2",
      name: "MVP & 文档",
      description: "MVP及其文档",
      week: 7,
      color: "#673AB7",
      completed: false,
    },
    {
      id: "m-3",
      name: "完整项目 & 文档",
      description: "完整项目及其文档",
      week: 10,
      color: "#673AB7",
      completed: false,
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
            <Grid container sx={{ width: "100%" }}>
              {weeks.map((week, index) => (
                <Grid
                  item
                  key={index}
                  sx={{
                    width: "9.09%", // 确保严格均分为11格 (100% / 11)
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
                          width: "9.09%", // 确保严格均分为11格 (100% / 11)
                          borderLeft: "1px dashed #eee",
                          backgroundColor:
                            index % 2 === 0 ? "#f9f9f9" : "transparent",
                        }}
                      />
                    ))}
                  </Box>

                  {/* 该角色的任务 */}
                  {roleData.tasks.map((task) => (
                    <React.Fragment key={task.id}>
                      {/* 实际进度条 */}
                      <Box
                        sx={{
                          position: "absolute",
                          height: 12,
                          top: 2,
                          left: `${task.actual.start * 9.09}%`,
                          width: `${task.actual.duration * 9.09}%`,
                          backgroundColor: task.color,
                          borderRadius: 1,
                        }}
                      />

                      {/* 计划进度条 - 带有任务名称 */}
                      <Tooltip title={task.name} arrow placement="top">
                        <Box
                          sx={{
                            position: "absolute",
                            height: 12,
                            bottom: 2,
                            left: `${task.planned.start * 9.09}%`,
                            width: `${task.planned.duration * 9.09}%`,
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
            <Grid container sx={{ width: "100%" }}>
              {weeks.map((week, index) => (
                <Grid
                  item
                  key={index}
                  sx={{
                    width: "9.09%", // 确保严格均分为11格 (100% / 11)
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
            {projectTasks.map((groupData) => (
              <Box
                key={groupData.id}
                sx={{ mb: 4, display: "flex", alignItems: "center" }}
              >
                {/* 组名称 */}
                <Box sx={{ width: "25%", pr: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {groupData.name} Group
                  </Typography>
                </Box>

                {/* 甘特图条形图区域 */}
                <Box sx={{ width: "75%", position: "relative", height: 90 }}>
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
                          width: "9.09%", // 确保严格均分为11格 (100% / 11)
                          borderLeft: "1px dashed #eee",
                          backgroundColor:
                            index % 2 === 0 ? "#f9f9f9" : "transparent",
                        }}
                      />
                    ))}
                  </Box>

                  {/* 组内任务（并行显示） */}
                  {groupData.tasks.map((task, taskIndex) => {
                    // 计算任务应该在哪一行（最多3行）
                    const rowIndex = taskIndex % 3;
                    const rowPosition = rowIndex * 30 + 5; // 每行30px高，上下留5px间距

                    return (
                      <React.Fragment key={task.id}>
                        {/* 实际进度条 */}
                        <Box
                          sx={{
                            position: "absolute",
                            height: 10,
                            top: rowPosition,
                            left: `${task.actual.start * 9.09}%`,
                            width: `${task.actual.duration * 9.09}%`,
                            backgroundColor: task.color,
                            borderRadius: 1,
                          }}
                        />

                        {/* 计划进度条 - 带有任务名称 */}
                        <Tooltip title={task.name} arrow placement="top">
                          <Box
                            sx={{
                              position: "absolute",
                              height: 10,
                              top: rowPosition + 15,
                              left: `${task.planned.start * 9.09}%`,
                              width: `${task.planned.duration * 9.09}%`,
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
                      </React.Fragment>
                    );
                  })}
                </Box>
              </Box>
            ))}

            {/* 里程碑 */}
            <Box sx={{ mb: 2, mt: 4, display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "25%", pr: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Milestones
                </Typography>
              </Box>

              {/* 里程碑图示区域 */}
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
                        width: "9.09%", // 确保严格均分为11格 (100% / 11)
                        borderLeft: "1px dashed #eee",
                        backgroundColor:
                          index % 2 === 0 ? "#f9f9f9" : "transparent",
                      }}
                    />
                  ))}
                </Box>

                {/* 里程碑标记 */}
                {milestones.map((milestone) => (
                  <Tooltip
                    key={milestone.id}
                    title={
                      <React.Fragment>
                        <Typography variant="subtitle2">
                          {milestone.name}
                        </Typography>
                        <Typography variant="body2">
                          {milestone.description}
                        </Typography>
                        <Typography variant="caption">
                          Week {milestone.week + 1}
                        </Typography>
                      </React.Fragment>
                    }
                    arrow
                    placement="top"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: 16,
                        height: 16,
                        left: `${milestone.week * 9.09 + 4.5}%`,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: milestone.completed
                          ? milestone.color
                          : "#fff",
                        border: `2px solid ${milestone.color}`,
                        borderRadius: "50%",
                        zIndex: 2,
                        cursor: "pointer",
                      }}
                    />
                  </Tooltip>
                ))}

                {/* 连接线 */}
                <Box
                  sx={{
                    position: "absolute",
                    height: 2,
                    backgroundColor: "#673AB7",
                    top: "50%",
                    left: `${milestones[0].week * 9.09 + 4.5}%`,
                    width: `${
                      (milestones[milestones.length - 1].week -
                        milestones[0].week) *
                      9.09
                    }%`,
                    zIndex: 1,
                  }}
                />

                {/* 里程碑文字 */}
                {milestones.map((milestone) => (
                  <Typography
                    key={`label-${milestone.id}`}
                    variant="caption"
                    sx={{
                      position: "absolute",
                      top: -20,
                      left: `${milestone.week * 9.09 + 4.5}%`,
                      transform: "translateX(-50%)",
                      color: milestone.color,
                      fontWeight: "bold",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {milestone.name}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          {/* 图例 */}
          <Box sx={{ mt: 4, display: "flex", gap: 4, flexWrap: "wrap" }}>
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#673AB7",
                  mr: 1,
                  borderRadius: "50%",
                }}
              />
              <Typography variant="body2">Completed Milestone</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#fff",
                  border: "2px solid #673AB7",
                  mr: 1,
                  borderRadius: "50%",
                }}
              />
              <Typography variant="body2">Upcoming Milestone</Typography>
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
