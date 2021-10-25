import React, {useState} from "react";

/* osoba = {            // pozn. mám pole, které když použiju destructuring
    jmeno: "alena",     // tak bude vypadat takto:
    vek: 18
}

const {jmeno, vek} = osoba  // vytvořím proměnnou a do jejích props dám 
                            // atributy aleny

pole [0, () => {}]       // pak když mám pole, jehož obsahem je 0 a funkce
                        // v tomto případě arrow funkce, tak ho pomocí
                        // destructuringu přepíšu takto:

const [hodnota, funkce] = pole

*/


const Pocitadlo = ({start, step}) => {

    const[pocet, setPocet] = useState(start) 
    
    /* stav se jmenuje pocet a fce,    která bude měnit stav se jmenuje setPocet */
    
    const handleClick = () => {
        /* setPocet(pocet + 1) */
        setPocet(pocet + step) 
        
        /* a tady už použiju fci setPocet, která změní ten počet a říkám jí, na co se pocet změní => počet + 1 */
    }

    return (
        <>
            <h2>Pocitadlo + {step}</h2>
            <p>{pocet}</p>
            <button onClick={handleClick}>klikni na mě</button>
        </>

    );
}

export default Pocitadlo;