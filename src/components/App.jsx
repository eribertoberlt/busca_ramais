import React, {useState} from 'react'
// import ramais from '../data/ramais'
import ramal from '../data/ramais.json'
import Ramal from './Ramal'
import './App.css'

const App = (props)=>{
    const ramais = ramal.ramais; //entra no primeiro objeto do JSON

    const [tipo, setTipo] = useState('Colaborador')
    const [Array, setArray] = useState(ramais)
    
    var checkColaborador = ()=>{
        setTipo('Colaborador')
    }

    var checkDepartamento = ()=>{
        setTipo('Departamento')
    }

    var checkRamal = ()=>{
        setTipo('Ramal')
    }
    
    var Search = (inputSearch)=>{
        if(tipo === 'Colaborador'){
            setArray(ramais.filter((ramais)=>{return ramais.pessoa.toUpperCase().search(inputSearch.toUpperCase()) !== -1}))
        }else if(tipo === 'Departamento'){
            setArray(ramais.filter((ramais)=>{return ramais.dpto.toUpperCase().search(inputSearch.toUpperCase()) !== -1}))
        }
        else if(tipo === 'Ramal'){
            setArray(ramais.filter((ramais)=>{return ramais.ramal.search(inputSearch) !== -1}))
        }
    }

    return(        
        <Ramal 
            ramais={ Array } 
            checkColaborador={checkColaborador} 
            checkDepartamento={checkDepartamento}
            checkRamal={checkRamal}
            Search={Search}
        />
    )
}

export default App