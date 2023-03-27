import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import Navbar from "../../Components/Navbar";

const Landing = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Typography paragraph>Welcome! The name is</Typography>
        <Typography paragraph>Cecil Cao</Typography>
        <Typography paragraph>Software Developer</Typography>
      </Box>
    </Box>
  );
};

export default Landing;
