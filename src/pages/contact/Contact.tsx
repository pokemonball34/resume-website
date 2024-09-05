import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Contact = () => {
    return (
        <Box sx={{ m: 36 }}>
            <Typography fontSize={30} fontFamily={'monospace'} fontWeight={700}>
                My Contacts
            </Typography>
            <Typography>Email, Github, LinkedIn, etc...</Typography>
        </Box>
    );
};

export default Contact;
