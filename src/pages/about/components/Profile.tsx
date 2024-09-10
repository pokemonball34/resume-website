import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Profile = () => {
    return (
        <Box
            sx={{
                marginRight: 8,
                flexGrow: 1,
                display: { xs: 'flex' },
            }}
        >
            <Avatar
                alt='Cecil Cao'
                src='src/assets/profile.jpg'
                variant='rounded'
                sx={{ width: 256, height: 256 }}
            />
            <Box
                sx={{
                    paddingLeft: 4,
                    display: {
                        xs: 'box',
                        textAlign: 'left',
                    },
                }}
            >
                <Typography
                    fontFamily={'monospace'}
                    fontWeight={700}
                    fontSize={36}
                >
                    Cecil Cao
                </Typography>
                <Typography
                    fontFamily={'monospace'}
                    sx={{ marginBottom: '1rem' }}
                >
                    Web Developer and Game Designer
                </Typography>
                <Box sx={{ display: { marginTop: 8, marginBottom: 8 } }}>
                    <Typography fontFamily={'monospace'} fontWeight={700}>
                        Email:
                    </Typography>
                    <Typography
                        fontFamily={'monospace'}
                        sx={{ marginBottom: '1rem' }}
                    >
                        cecil12345@hotmail.com
                    </Typography>
                    <Typography fontFamily={'monospace'} fontWeight={700}>
                        Phone Number:
                    </Typography>
                    <Typography fontFamily={'monospace'}>
                        647-854-8805
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Profile;
