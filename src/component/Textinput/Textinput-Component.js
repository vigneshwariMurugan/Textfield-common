import React, {useState} from "react";
import { FormControl, InputGroup } from 'react-bootstrap';
import './style.css'
function TextinputComponent(props){
        const [inputType] = useState(props.type)
        const [inputValue, setInputValue] = useState('')
      
        function handleChange(event){
          setInputValue(event.target.value);
          if(props.onChange) props.onChange(inputValue)
        }
        return (
          <>
            <input type={inputType} value={inputValue} name="input-form" onChange={handleChange} class="inputclass"/>
          </>
        );
      
}
export default TextinputComponent;