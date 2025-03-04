import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Tabpanel from '../../components/portfolio/Tabpanel';
import Project from '../../components/portfolio/Project';

const Portfolio = () => {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ m: 8, paddingTop: 8 }} id='Portfolio'>
            <Typography
                fontSize={30}
                fontFamily={'monospace'}
                fontWeight={700}
                sx={{ m: 4 }}
            >
                Portfolio
            </Typography>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    textColor: 'white',
                }}
            >
                <Tabs
                    value={value}
                    onChange={(_, newValue) => setValue(newValue)}
                    aria-label='basic tabs example'
                    centered={true}
                >
                    <Tab
                        label='Software Development'
                        id='tab0'
                        sx={{ color: 'white' }}
                    />
                    <Tab
                        label='Creative Writing'
                        id='tab1'
                        sx={{ color: 'white' }}
                    />
                    <Tab label='Art' id='tab2' sx={{ color: 'white' }} />
                </Tabs>
            </Box>
            <Tabpanel value={value} index={0}>
                <Box sx={{ marginTop: 4 }}>
                    <Project
                        title='Lizard'
                        content='Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica'
                    />
                </Box>
            </Tabpanel>
            <Tabpanel value={value} index={1}>
                <Box sx={{ marginTop: 4 }}>
                    <Project
                        title='Panda'
                        content='The giant panda, also known as the panda bear or simply panda, 
                        is a bear species endemic to China. It is characterised by its white coat 
                        with black patches around the eyes, ears, legs and shoulders.'
                    />
                </Box>
            </Tabpanel>
            <Tabpanel value={value} index={2}>
                <Box sx={{ marginTop: 4 }}>
                    <Project
                        title='Dog'
                        content='The dog was the first species to be domesticated by humans.'
                    />
                </Box>
            </Tabpanel>
        </Box>
    );
};

export default Portfolio;
