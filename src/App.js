import './App.css';
import sqrt from './sqrtNM';
import { useState } from 'react';

function App() {
    const [sqrtArg, setSqrtArg] = useState('');
    const handleChange = (evt) => {
        setSqrtArg(evt.currentTarget.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Demo</h2>
                <label>
                    sqrt arg:&nbsp;
                    <input type="text" value={sqrtArg} onChange={handleChange} />
                </label>
                <div>sqrt(arg) = {sqrt(sqrtArg)}</div>
            </header>
        </div>
    );
}

export default App;
