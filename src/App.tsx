import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>
                    Count is {count}
                </button>
            </div>
        </>
    );
}

export default App;
