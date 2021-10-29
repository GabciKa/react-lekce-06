import React, {useState} from "react";


const Formular = () => {

    const [text, setText] = useState("");

    const handleChange = (event) => { /* sleduju event => co se děje v inputu */
        setText(event.target.value) /* tady si uložim to, co je napsaný v inputu do té proměnné setText */
    }
    

    return (
        <>
           <h2>Formulář</h2> 
           <input type="text" onChange={handleChange}/>
           <p>{text}</p>
        </>

    );
}

export default Formular;