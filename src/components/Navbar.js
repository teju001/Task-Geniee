import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Logo from "../Assets/bglogo.png";
import "./Navbar.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, path: "/" }, // Home path
    { text: "Projects", icon: <InfoIcon />, path: "/projectsall" }, // Projects path
    { text: "Contact", icon: <PhoneRoundedIcon />, path: "/contact" }, // Contact path
  ];

  return (
    <nav style={{ position: "absolute", width: "100%", zIndex: 100 }}>
      <div className="nav-logo-container">
        <Link to="/"> {/* Wrap the logo with Link */}
          <img src={Logo} alt="Logo" style={{ width: "300px", height: "120px" }} />
        </Link>
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link> {/* Add Link for Home */}
        <Link to="/projectsall">Projects</Link> {/* Add Link for Projects */}
        <Link to="/signin">Sign In</Link>
        <Link to="/contact">Contact</Link>
        <button className="navbut">Become a Tasker</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
