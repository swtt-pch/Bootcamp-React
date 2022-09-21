const rootDiv = document.querySelector("#root");

const Candidato = function (props) {
    const [votos, setVotos] = React.useState(0);

    return (
        <>
            <h1>{props.nome}</h1>
            <h2>Votos: {votos}</h2>
            <button onClick={() => setVotos(votos + 1)}>Votar</button>
        </>
    );
};

const Votacao = function () {
    return (
        <>
            <Candidato nome="Frita" />
            <Candidato nome="Assada" />
            <Candidato nome="Recheada" />
        </>
    );
};

ReactDOM.createRoot(rootDiv).render(<Votacao />);
