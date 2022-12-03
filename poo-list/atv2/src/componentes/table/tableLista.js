import React from 'react'
// import { Table } from 'semantic-ui-react'
import './table.css'


const TableLista = ({ dados }) => {
    const atributos = Object.keys(dados[0])

    return (
        <div className='details'>
            <table>
                <thead>
                    <tr>
                        {atributos.length && atributos.map((atributo) => {
                            return (
                                <th className='dadoTbale' >{atributo}</th>
                            )
                        })}

                    </tr>
                </thead>
                <tbody>
                    {dados.length && dados.map((dado) => {
                        return (
                            <tr>
                                {atributos.length && atributos.map((atributo) => {
                                    return (
                                        <td className='dadoTbale'>{dado[atributo]}</td>
                                    )
                                })}
            
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}
export default TableLista;