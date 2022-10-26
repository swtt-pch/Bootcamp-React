import imagemEdit from "../assets/imagens/edit-icon.png" // importando recurso de imagem de edit (lápis) como uma variável
import imagemDelete from "../assets/imagens/delete-icon.png" // importando recurso de imagem de delete (lixeira) como uma variável

import imgCapaPadrao from "../assets/imagens/capa.png"
import { useState } from "react"
import api from "../api"

function CardMusica(props) {

    const imagem = {
        backgroundImage: `url(${props.imagem ?? imgCapaPadrao})`
    }


    const [edit, setEdit] = useState(false);
    const [titulo, setTitulo] = useState(props.titulo)
    const [artista, setArtista] = useState(props.artista)
    const [genero, setGenero] = useState(props.genero)
    const [ano, setAno] = useState(props.ano)

    const atualizarMusica = function () {
        const musicaAtualizada = {
            titulo,
            artista,
            genero,
            ano
        }
        api.put(`/${props.id}`, musicaAtualizada)
            .then(res => {
                console.log(res)
            })
        setEdit(false)
    }

    return (
        <>
            <div style={imagem} className="card-music">
                <div className="icons">
                    <img onClick={() => setEdit(edit ? false : true)} src={imagemEdit} alt="" />
                    <img src={imagemDelete} alt="" />
                </div>
                <div className="info-music">
                    <p>
                        <strong className="card-title">música: </strong>
                        <input disabled={!edit} className={edit ? "input-music-enable" : "input-music-disabled"} type="text" defaultValue={titulo} onInput={(e) => setTitulo(e.target.value)} />
                    </p>
                    <p>
                        <strong className="card-title">artista: </strong>
                        <input disabled={!edit} className={edit ? "input-music-enable" : "input-music-disabled"} type="text" defaultValue={artista} onInput={(e) => setArtista(e.target.value)} />
                    </p>
                    <p>
                        <strong className="card-title">gênero: </strong>
                        <input disabled={!edit} className={edit ? "input-music-enable" : "input-music-disabled"} type="text" defaultValue={genero} onInput={(e) => setGenero(e.target.value)} />
                    </p>
                    <p>
                        <strong className="card-title">ano: </strong>
                        <input disabled={!edit} className={edit ? "input-music-enable" : "input-music-disabled"} type="text" defaultValue={ano} onInput={(e) => setAno(e.target.value)} />
                    </p>
                    <button className={edit ? "btn-salvar-enable" : "btn-salvar-disabled"} onClick={atualizarMusica}>Salvar</button>
                </div>
            </div>
        </>
    );
}

export default CardMusica;