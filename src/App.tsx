import Box from '@mui/material/Box';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Resume from './pages/resume/Resume';

function App() {
    return (
        <Box>
            <Navbar />
            <Box>
                <Box>This is Cecil Cao</Box>
                <Box>About me</Box>
                <Resume />
                <Box>Portfolio</Box>
                <Box>Contact</Box>
            </Box>
        </Box>
    );
}

export default App;
