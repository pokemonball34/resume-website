import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const About = () => {
    return (
        <Box sx={{ m: 8 }}>
            <Typography
                fontSize={30}
                fontFamily={'monospace'}
                fontWeight={700}
                sx={{ m: 4 }}
            >
                About me
            </Typography>

            <Paper>
                <Box sx={{ padding: 4 }}>
                    <Avatar
                        alt='Cecil Cao'
                        src='src/assets/profile.jpg'
                        variant='rounded'
                        sx={{ width: 256, height: 256 }}
                    />
                    <Typography>Cecil Cao</Typography>
                    <Typography>Web Developer and Game Designer</Typography>
                    <Typography>cecil12345@hotmail.com</Typography>
                    <Typography>647-854-8805</Typography>
                </Box>
                <Box>
                    <Typography>Skills</Typography>
                    <Typography>Typescript, Python, Java, C/Cpp</Typography>
                </Box>
                <Box sx={{ padding: 4 }}>
                    <Typography>Intro</Typography>
                    <Typography>
                        Hi there! Welcome to my website! The name is Cecil Cao
                        and I'm currently finishing my final year of CS
                        undergrad at the University of Toronto!
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default About;
