import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About = () => {
    return (
        <Box sx={{ m: 36 }}>
            <Typography fontSize={30} fontFamily={'monospace'} fontWeight={700}>
                About me
            </Typography>

            <Typography>
                Hi there! Welcome to my website! The name is Cecil Cao and I'm
                currently finishing my final year of CS undergrad at the
                University of Toronto!
            </Typography>
        </Box>
    );
};

export default About;
