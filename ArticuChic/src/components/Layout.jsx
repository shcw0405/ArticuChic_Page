import { Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ArticuChic
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/news">
            News
          </Button>
          <Button color="inherit" component={RouterLink} to="/members">
            Members
          </Button>
          <Button color="inherit" component={RouterLink} to="/docs">
            Docs
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" disableGutters sx={{ px: { xs: 2, sm: 3 } }}>
        <Outlet />
      </Container>

      <Box
        component="footer"
        sx={{ py: 3, bgcolor: "primary.main", color: "white" }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} ArticuChic. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
