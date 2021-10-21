import React from 'react';
import { useState } from 'react';

const Stavitko = () => {

    const [pocet, setPocet] = useState(0) /* tahle reactí fce - "useState" vrací pole, které obsahuje proměnnou, ve které se sleduje stav a fce, ve které se mění stav
 */
    const handleClick = () => {
        console.log("kuk");
        setPocet(pocet + 1);  /* fce setPocet udělá to, že aktuální počet při kliknutí zvětší o 1 */
    }


   /*  ============ */

    const [zapnuto, setZapnuto] = useState(true)  /* tady vytvářím fci, která sleduje, jestli v zapnuto je zrovna true nebo false */
    const vypnout = () => {
        setZapnuto(false); /* konstanta, která definuje setZapnuto na false */
    }
    const zapnout = () => {
        setZapnuto(true); /* konstanta, která definuje setZapnuto na true*/
    }

    return (
        <>
        <button onClick={handleClick}>Klikni na mě</button>
        <p>Počet kliknutí na tlačítko: {pocet}</p>
        <hr/>

     {/*    ============  */}
        <button onClick={vypnout}>Vypnout</button> {/* na klik volám fci vypnout, tzn - nastavuju setZapnuto na false */}
        <button onClick={zapnout}>Zapnout</button> {/* na klik volám fci vypnout, tzn - nastavuju setZapnuto na true */}
        <p>{zapnuto ? "zapnuto" : "vypnuto"}</p> {/* ptám se: je v zapnuto true nebo false? jestli true, napiš do <p> "zapnuto", jestli false, vypíš "vypnuto" */}
        
      
        </>
    )
}

export default Stavitko;