import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

import './styles.css';

const InputTags = props => {
    const [tags, setTags] = useState([]);
    const Keys = {
        TAB: 9,
        COMMA: 188,
    }
    const addTags = event => {
        //console.log(event.keyCode);
    
        if ((event.keyCode === Keys.COMMA || event.keyCode === Keys.TAB) && event.target.value !== "") {
            event.target.value = event.target.value.replace(/,\s*$/, "");
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };
    return (
        <div className="tags-input">
            <ul id="tags">
                {tags.map((tag, index) => (
                    <li className="tag" id="tag" key={index}>
                        <span>{tag}</span>
                        <i
                            className="tag-close-icon"
                            onClick={() => removeTags(index)} 
                        >
                            <FaRegWindowClose size={13} color="#253166" />
                        </i>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                onKeyUp={event => addTags(event)}
                placeholder="Separe por vírgulas para adicionar seus serviços"
            />
        </div>
    );
};
export default InputTags;