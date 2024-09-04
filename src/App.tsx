import Box from '@mui/material/Box';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Resume from './pages/resume/Resume';
import About from './pages/about/About';
import Homepage from './pages/home/Homepage';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

function App() {
    return (
        <Box>
            <Navbar />
            <Box>
                <Homepage />
                <About />
                <Resume />
                <Portfolio />
                <Contact />
            </Box>
        </Box>
    );
}

export default App;
