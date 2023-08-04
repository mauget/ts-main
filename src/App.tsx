import './App.css';
import sqrt from './sqrtNM';
import {ChangeEvent, useState} from 'react';

function App() {
    const [sqrtArg , setSqrtArg] = useState(2);
    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const { currentTarget } = event;
        setSqrtArg(currentTarget.value as unknown as number);
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
