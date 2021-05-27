import React from 'react';
import ButtonList from './components/ButtonList';
import Produto from './components/Produto';

export const Home = () => {

    // JSON alocados em variaveis para substituir a API que estava sendo utilizada... Mas a API retornava o mesmo modelo de dados
    let notebook = {
        "id": "notebook",
        "fotos": [
            {
                "titulo": "notebook-2",
                "src": "img/notebook.jpg"
            },
            {
                "titulo": "smartphone",
                "src": "img/smartphone.jpg"
            }
        ],
        "nome": "Notebook",
        "preco": "2499.50",
        "descricao": "Esse é um notebook novo.",
        "vendido": "false",
        "usuario_id": "maria@teste.com"
    };

    let tablet = {
        "id": "tablet",
        "fotos": [
            {
                "titulo": "tablet-2",
                "src": "img/tablet-1.jpg"
            }
        ],
        "nome": "Tablet",
        "preco": "1899",
        "descricao": "Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.",
        "vendido": "false",
        "usuario_id": "lobo@teste.com"
    };


    let smartphone = {
        "id": "smartphone",
        "fotos": [
            {
                "titulo": "smartphone-2",
                "src": "img/smartphone-1.jpg"
            },
            {
                "titulo": "smartwatch",
                "src": "img/smartwatch.jpg"
            }
        ],
        "nome": "Smartphone",
        "preco": "2333",
        "descricao": "Novo smartphone.",
        "vendido": "false",
        "usuario_id": "joao@teste.com"
    };


    const produtos = [
        {
        nome: 'Tablet',
        url: tablet
        },
        {
        nome: 'Smartphone',
        url: smartphone
        },
        {
        nome: 'Notebook',
        url: notebook
        } 
    ];


    const [list, setList] = React.useState(null);
    const [carregando, setCarregando] = React.useState(null);


    return (
        <div>
        {
            produtos.map((produto) => (
            <ButtonList key={produto.nome} setCarregando={setCarregando} setList={setList} url={produto.url} text={produto.nome}></ButtonList>
            ))
        }
        
        {carregando && <p className="margin">Carregando...</p>}
        {!carregando && list && <Produto dados={list} />}

        </div>
    );
};


export default Home;