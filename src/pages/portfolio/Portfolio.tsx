import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Tabpanel from '../../components/portfolio/Tabpanel';

const Portfolio = () => {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ m: 36 }}>
            <Typography fontSize={30} fontFamily={'monospace'} fontWeight={700}>
                Portfolio
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={(_, newValue) => setValue(newValue)}
                    aria-label='basic tabs example'
                >
                    <Tab label='Item One' id='tab0' />
                    <Tab label='Item Two' id='tab1' />
                    <Tab label='Item Three' id='tab2' />
                </Tabs>
            </Box>
            <Tabpanel value={value} index={0}>
                Tabpanel 1
            </Tabpanel>
            <Tabpanel value={value} index={1}>
                Tabpanel 2
            </Tabpanel>
            <Tabpanel value={value} index={2}>
                Tabpanel 3
            </Tabpanel>
        </Box>
    );
};

export default Portfolio;
