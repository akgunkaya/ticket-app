import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Routes, Route, NavLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { EventProps } from "./common/types";
import { Analytics } from "./Pages/Analytics";
import { CreateEvent } from "./Pages/CreateEvent";
import { Dashboard } from "./components/Dashboard";

const drawerWidth = 240;

export default function App() {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [eventAdded, setEventAdded] = useState<boolean>(false);

  useEffect(() => {
    fetch("/event")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, [eventAdded]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      name: "Dashboard",
      route: "/",
    },
    {
      name: "Create Event",
      route: "create",
    },
    {
      name: "Analytics",
      route: "analytics",
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <Link
            key={item.name}
            to={item.route}
            component={NavLink}
            color="inherit"
          >
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Event Manager App
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>
          <Paper elevation={1}>
            <Routes>
              <Route path="/" element={<Dashboard events={events} />}></Route>
              <Route
                path="/create"
                element={
                  <CreateEvent
                    eventAdded={eventAdded}
                    setEventAdded={setEventAdded}
                  />
                }
              />
              <Route
                path="/analytics"
                element={<Analytics events={events} />}
              />
            </Routes>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
