import * as React from "react";
import AxiosInstance from "../../Axios";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArticleIcon from "@mui/icons-material/Article";
import { Link, useLocation } from "react-router";

export default function Menu() {
  const [open, setOpen] = React.useState(true);
  const [leagues, setLeagues] = useState([]);

  console.log("League", leagues);

  const GetData = () => {
    AxiosInstance.get(`league/`).then((res) => {
      setLeagues(res.data);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  return (
    <>
      <List>
        <ListItemButton
          onClick={handleClick}
          component={Link}
          to="/"
          selected={path === "/"}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Все клубы" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {leagues.map((league) => (
              <ListItemButton
                key={league.id}
                component={Link}
                to={`/league/${league.id}`}
                sx={{ pl: 4 }}
                selected={path === `/league/${league.id}`}
              >
                <ListItemIcon>
                  <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary={league.name} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <ListItemButton
          component={Link}
          to="/create"
          selected={path === "/create"}
        >
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Создать клуб" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/articles"
          selected={path === "/articles"}
        >
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Статьи" />
        </ListItemButton>
      </List>
    </>
  );
}
