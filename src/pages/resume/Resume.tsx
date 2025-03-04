import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '../../components/timeline/Timeline';

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
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '50%' }}>
                    <Typography
                        sx={{
                            mr: 2,
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
                <Box sx={{ width: '50%' }}>
                    <Typography
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Skills
                    </Typography>
                    <Timeline />

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
                    <Typography
                        sx={{ fontFamily: 'monospace', textAlign: 'left' }}
                    >
                        University of Toronto Computer Science Undergraduate
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Resume;
