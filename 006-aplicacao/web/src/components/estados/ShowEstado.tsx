import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { EstadoModel } from "./ListEstados";

const ShowEstado = () => {

    const { id } = useParams();

    // State -> armazena os dados dos estados (uf)
    const [ estado, setEstado ] = useState<EstadoModel>();
    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla ] = useState('');

    // Effect -> carrega os dados
    useEffect(() => {
        
        api.get(`/estados/${id}`)
            .then(response => {
                setEstado(response.data);
                setNome(response.data.nome);
                setSigla(response.data.sigla);
            })
    }, [id]);

    return(

        <div>
            <h2>Dados do Estado: {id} - {nome} / {estado?.sigla}</h2>

            <p>Nome: {nome}</p>
            <p>Sigla: {sigla}</p>
            <p>Data de inserção: {estado?.created_at}</p>
        </div>
    );
}

export default ShowEstado;