import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {MyInput} from "./components/MyInput/MyInput";
import {MyAddItemField} from "./components/MyAddItemField/MyAddItemField";

function App() {

    let [value, setValue] = useState<string>('')

    // const onChangeCallback = (currentValue: string) => {
    //     setValue(currentValue)
    // }
    const onClickCallback = (currentValue: string) => {
        setValue(currentValue)
        console.log(value)
    }

    return (
        <div className="App">
            {/*<MyInput/>*/}
            {/*<MyAddItemField*/}
            {/*    onClickCallback={onClickCallback}*/}
            {/*/>*/}
        </div>
    );
}

export default App;
