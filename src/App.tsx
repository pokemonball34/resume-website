import Box from '@mui/material/Box';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Resume from './pages/resume/Resume';
import About from './pages/about/About';
import Homepage from './pages/home/Homepage';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
    return (
        <Box id='Home'>
            <Navbar />
            <Box>
                <Homepage />
                <About />
                <Resume />
                <Portfolio />
                <Contact />
            </Box>
            <Footer />
        </Box>
    );
}

export default App;
