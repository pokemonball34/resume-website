import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

const Contact = () => {
    const newWindow = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <Box sx={{ m: 36, paddingTop: 8 }} id='Contact'>
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
                Feel free to connect with me on LinkedIn, or watch me on Github!
            </Typography>
            <Box sx={{ xs: 'box', display: { margin: 32 } }}>
                <IconButton
                    sx={{ m: 2 }}
                    onClick={() =>
                        newWindow('https://github.com/pokemonball34')
                    }
                >
                    <GitHubIcon
                        sx={{ fontSize: 80 }}
                        href='https://github.com/pokemonball34'
                    />
                </IconButton>
                <IconButton
                    sx={{ m: 2 }}
                    onClick={() =>
                        newWindow(
                            'https://www.linkedin.com/in/cecil-cao-140466162/'
                        )
                    }
                >
                    <LinkedInIcon
                        sx={{ fontSize: 80 }}
                        href='https://www.linkedin.com/in/cecil-cao-140466162/'
                    />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Contact;
