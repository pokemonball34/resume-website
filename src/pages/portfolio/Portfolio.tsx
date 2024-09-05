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
        <Box sx={{ m: 8 }}>
            <Typography fontSize={30} fontFamily={'monospace'} fontWeight={700}>
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
                <Project />
            </Tabpanel>
            <Tabpanel value={value} index={1}>
                Writing
            </Tabpanel>
            <Tabpanel value={value} index={2}>
                Art
            </Tabpanel>
        </Box>
    );
};

export default Portfolio;
