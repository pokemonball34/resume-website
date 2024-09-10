import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Intro = () => {
    return (
        <Box sx={{ paddingLeft: 4 }}>
            <Typography fontFamily={'monospace'} fontWeight={700} fontSize={36}>
                Intro
            </Typography>
            <Typography fontFamily={'sans-serif'}>
                Hi there! Welcome to my website! The name is Cecil Cao and I'm
                currently finishing my final year of CS undergrad at the
                University of Toronto! I made this website using Vite+TS using
                the MUI library for most of the assets.
                <br />
                Right now, I'm looking for employment after graduation, and I'm
                currently looking for a position in software development. I love
                to be creative, and exploring ideas of creative expression! I
                have experience working with AI, Game Development, and Web
                Development and I hope to continue working with these fields.
            </Typography>
        </Box>
    );
};

export default Intro;
