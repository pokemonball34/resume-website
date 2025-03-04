import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Profile from './components/Profile';
import Intro from './components/Intro';
import Skillset from './components/Skillset';

const About = () => {
    return (
        <Box sx={{ m: 8, paddingTop: 8 }} id='About Me'>
            <Typography
                fontSize={30}
                fontFamily={'monospace'}
                fontWeight={700}
                sx={{ m: 4 }}
            >
                About me
            </Typography>

            <Paper
                sx={{ padding: 4, display: { xs: 'flex', textAlign: 'left' } }}
            >
                <Box>
                    <Profile />
                    <Box
                        sx={{
                            display: {
                                xs: 'box',
                            },
                            marginTop: 4,
                        }}
                    >
                        <Skillset />
                    </Box>
                </Box>
                <Divider variant='middle' orientation='vertical' flexItem />
                <Intro />
            </Paper>
        </Box>
    );
};

export default About;
