import { useState, useEffect } from "react";
import SelectEstados from "../estados/SelectEstados";

interface UpdateCidadeProps {
    id: number;
    nome: string;
    estado_id: number;
}

const UpdateCidade = (props : UpdateCidadeProps) => {

    // State -> ARMAZENA os dados das cidades
    const [ nome, setNome ] = useState('');
    const [ estadoId, setEstadoId ] = useState(0);

    // Effect -> CARREGA os dados das cidades
    useEffect(() => {
        setNome(props.nome);
        setEstadoId(props.estado_id);
    }, [props]);

    const handleUpdateCidade = () => {
        // TODO
    }

    return(

        <div>
            <h3>Atualizar cidade: {props.nome}</h3>

            <form onSubmit={handleUpdateCidade}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text"
                        name='nome'
                        id='nome'
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                        placeholder='Nome da cidade' 
                    />
                </div>

                <SelectEstados
                    id={estadoId}
                    setId={setEstadoId}
                />

            </form>

        </div>
    );
}

export default UpdateCidade;