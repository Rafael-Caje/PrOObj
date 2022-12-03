import React from 'react';
import "./select.css"

const Select = () => {
    return (
        <>
            <div className="medidas">
                <label htmlFor="" className="tituloS">Selecione o gênero</label>
                <select className="medida" name="medidas" id="medida" defaultValue={'default'}>
                    <option value="default" disabled>Gênero: </option>
                    <option value="F">F</option>
                    <option value="M">M</option>
                </select></div>
        </>
    );

}



export default Select;