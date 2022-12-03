import React from 'react';
import "./input.css"

const InputCadastros = ({ id, placeholder, type, children, validacao }) => {
    return (
        <>
            <div className="input-box">
                <label htmlFor={id}><span className="details">{children}</span></label>
                <input id={id} name={id} type={type} placeholder={placeholder} onChange={validacao} required />
            </div>
        </>
    );
}

export default InputCadastros;