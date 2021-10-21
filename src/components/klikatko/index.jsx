import React from "react";

const Klikatko = () => {
    const handleClick = () => {
        console.log("kuk");
    }

    const handleChange = (event) => {
        /* console.log("neco píšeš"); */
        console.log(event.target.value);
    }

    return (
        <>

            <button onClick={handleClick}>kuk klikni na mě</button>  {/* => na kliknutí (= on click) proveď funkci "handleClick" a tu funkci si definuju přímo v té konstantě - viz výše */}

            <input type="text" onChange={handleChange}></input>
        
        </>
    );
}

export default Klikatko;