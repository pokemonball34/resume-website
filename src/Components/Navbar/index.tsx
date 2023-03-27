import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import NavbarItem from "../NavbarItem";

const drawerWidth = 240;

const Navbar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h5" noWrap component="div" paddingRight={"40px"}>
          Cecil Cao
        </Typography>
        <Avatar />
      </Toolbar>
      <Divider />
      <List>
        {["Title", "Projects", "Past Experience"].map((text, i) => (
          <NavbarItem key={i} text={text} index={i} />
        ))}
      </List>
      <Divider />
      <List>
        {["CV", "LinkedIn", "Email"].map((text, i) => (
          <NavbarItem key={i} text={text} index={i} />
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
