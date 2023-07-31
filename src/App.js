import './App.css';
import sqrt from './sqrtNM';
import { useState } from 'react';

function App() {
    const [sqrtArg, setSqrtArg] = useState(2);
    const handleChange = (event) => {
        const { currentTarget } = event;
        setSqrtArg(currentTarget.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Demo</h2>
                <label>
                    arg:&nbsp;
                    <input type="text" value={sqrtArg} onChange={handleChange}/>
                </label>
                <div>sqrt(arg) = {sqrt(sqrtArg)}</div>
            </header>
        </div>
    );
}

export default App;
