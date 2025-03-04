import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExperienceTimeline from '../../components/timeline/ExperienceTimeline';

const Resume = () => {
    return (
        <Box sx={{ margin: 4, paddingTop: 8 }} id='Resume'>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: 30,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                    margin: 4,
                }}
            >
                Resume
            </Typography>
            <ExperienceTimeline />
        </Box>
    );
};

export default Resume;
