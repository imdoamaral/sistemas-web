import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateCidade = () => {

    // State -> armazena os dados das cidades
    const [ nome, setNome ] = useState('');
    const [ estadoId, setEstadoId ] = useState(0);

    const navigate = useNavigate();

    const handleNewCidade = async(event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            nome,
            estado_id: estadoId
        }

        try {
            await api.post('/cidades', data);
            navigate('/cidades');

        } catch (error) {
            alert('Erro ao cadastrar a cidade.');
            console.error(error);
        }
    }

    return(

        <div>
            <h3>Cadastrar Cidade</h3>

            <form onSubmit={handleNewCidade}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                        placeholder='Nome da cidade' 
                    />
                </div>

                <div>
                    <label htmlFor="EstadoId"></label>
                    <input 
                        type="text" 
                        name="estadoId" 
                        id="estadoId"
                        value={estadoId}
                        onChange={event => setEstadoId(parseInt(event.target.value))}
                        placeholder='Estado ID da cidade' 
                    />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );
}

export default CreateCidade;