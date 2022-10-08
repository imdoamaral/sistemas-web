function limparSelect(campo) {

    const select = document.getElementById(campo);

    while (select.length > 1) {
        // remove até sobrar somente o primeiro select "Selecione:"
        select.remove(1);
    }
}

function preencherSelect(data, campo) {

    const select = document.getElementById(campo);
    limparSelect(campo);

    // Ordena em ordem alfabética
    data.sort((a, b) => a.nome.localeCompare(b.nome));

    // data = [Object{id, nome, sigla}, Object{...}, ...]
    for (const elemento of data) {

        // const id = data[index].id
        // Destructuring
        const { id, nome } = elemento;

        const option = document.createElement("option");
        option.value = id;
        option.innerHTML = nome;

        select.appendChild(option);
    }
}

function carregarDadosEstados() {

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(response => response.json())
        .then(data => preencherSelect(data, "estados"))
        .catch(error => console.error(error))
}

function carregarDadosCidades() {

    const selectEstados = document.getElementById("estados");

    const estadoIndex = selectEstados.selectedIndex;
    const estadoId = selectEstados.options[estadoIndex].value;

    const selectCidades = document.getElementById("cidades");

    limparSelect("cidades");

    if (estadoId === "") {
        return;
    }

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
        .then(response => response.json())
        .then(data => preencherSelect(data, "cidades"))
        .catch(error => console.error(error))
}

function preencherSelectEstados(data) {

    // data = [ Object{id, nome, sigla}, Object{...}, ...]

    // const selectEstados = document.getElementById("estados");
    const selectByForm = document.dados.estados; // recupera pelo atributo "name"

    limparSelect("estados")

    for (const estado of data) {

        // const id = data[index].id;
        // Destructuring
        const { id, nome, sigla } = estado;

        console.log(`${id} - ${nome} - ${sigla}`);

        const option = document.createElement("option");
        option.value = id;
        option.innerHTML = `${nome} - ${sigla}`;

        selectEstados.appendChild(option);
    }
}

function preencherSelectCidades(data) {

    const selectCidades = document.dados.cidades;

    for (const cidade of data) {

        const { id, nome } = cidade;

        console.log(`${id} - ${nome}`);

        const option = document.createElement("option");
        option.value = id;
        option.innerHTML = nome;

        selectCidades.appendChild(option);
    }
}