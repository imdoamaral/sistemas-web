import { useEffect, useState } from "react";
import api from '../../services/api';

interface EstadoModel {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
}

const ListEstados = () => {

    // Hooks
    // State -> armazena os dados dos estados (uf)
    const [ estados, setEstados ] = useState<EstadoModel[]>([]);

    // Effect -> carrega os dados
    useEffect(() => {
        loadData();
    },[]);

    // componente -> effect -> state -> render()

    const loadData = () => {

        api.get('/estados')
            .then(response => {
                // atualizar o state
                console.log(response.data);
                setEstados(response.data);
            })
    }

    return(
    
        <div>
            <h2>Lista de Estados</h2>
    
            <ul>
                { estados.map(item => (
    
                    <li key={item.id}>{item.nome}-{item.sigla}</li>
    
                )) }
            </ul>
        </div>
    );
}

export default ListEstados;