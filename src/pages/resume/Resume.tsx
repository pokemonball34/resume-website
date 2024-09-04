import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '../../components/timeline/Timeline';

const Resume = () => {
    return (
        <Box sx={{ margin: 4 }}>
            <Typography
                sx={{
                    textAlign: 'center',
                    mr: 2,
                    // display: { xs: 'none', md: 'flex' },
                    fontSize: 24,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Resume
            </Typography>
            <Box>
                <Typography
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Professional Experience
                </Typography>
                <Timeline />
            </Box>
            <Box>
                <Typography
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Skills
                </Typography>
                <Timeline />
            </Box>

            <Typography
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Education
            </Typography>
        </Box>
    );
};

export default Resume;
