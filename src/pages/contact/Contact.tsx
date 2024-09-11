import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
    return (
        <Box sx={{ m: 36 }}>
            <Typography
                fontSize={30}
                fontFamily={'monospace'}
                fontWeight={700}
                sx={{ m: 4 }}
            >
                My Contacts
            </Typography>
            <Typography
                fontFamily={'monospace'}
                fontWeight={500}
                sx={{ marginBottom: 8 }}
            >
                Feel free to contact me via. email, or LinkedIn, or watch me on
                Github!
            </Typography>
            <Box sx={{ xs: 'box', display: { margin: 32 } }}>
                <GitHubIcon sx={{ fontSize: 80, marginRight: 8 }} href='' />
                <LinkedInIcon sx={{ fontSize: 80 }} href='' />
            </Box>
        </Box>
    );
};

export default Contact;
