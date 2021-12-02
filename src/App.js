import React, {useState} from 'react';
import './App.css';

export default function App(){
    const [value, setValue] = useState('0');
    const [list, ] = useState([...Array(11).keys()]);

    const handleChange = event => {
        setValue(event.target.value);
    }

    // move to the nearest step when on mouseup event
    const onMouseUp = event => {
        const value = Number(event.target.value);
        const step = Math.floor(value);
        const decimals = Number((value - Math.floor(value)).toFixed(1));

        if(decimals >= 0.5 ) {
            setValue(step + 1);
        } else {
            setValue(step);
        }
    }

    return (
        <div className='app'>
            <div className='wrapper'>
                <div className='sliderContainer'>
                <input
                    className='slider'
                    type='range'
                    min='0'
                    max='10'
                    value={value}
                    onChange={handleChange}
                    onMouseUp={onMouseUp}
                    step='0.001'
                    list='datalist'/>
                <div className='ticks'>
                    {list.map(item => {
                        return (
                            <span
                                key={item}
                                className={ item - 0.5  < Number(value) && Number(value) < item + 0.5  ? 'hideTick' : 'tick'}
                            />
                        )
                    })}
                </div>
                </div>
                <datalist className='rangeList' id='datalist'>
                    {list.map(item => {
                        return (
                        <option
                            key={item}
                            className={Number(value) === item ? 'focusOption' : 'rangeOption'}
                        >
                            {item}
                        </option>
                        )
                    })}
                </datalist>
            </div>
        </div>
    );
}