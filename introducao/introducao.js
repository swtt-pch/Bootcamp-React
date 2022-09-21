// Adeus 😭😭
// const titulo = window.document.createElement("h1");
// titulo.innerHTML = "Meu primeiro título com JS";
// rootDiv.appendChild(titulo);

const rootDiv = document.querySelector("#root");

const Titulo = function (props) {
    return <h1>{props.texto}</h1>;
};

const Titulos = function () {
    return (
        <>
            <Titulo a="" b="" c="" texto="Este é o primeiro título" />
            <Titulo texto="Este é o segundo título" />
            <Titulo texto="Este é o terceiro título" />
            <Titulo texto="Este é o quarto título" />
            <Titulo texto="Este é o quinto título" />
        </>
    );
};

// criar um root dentro do elemento com id rootDiv
ReactDOM.createRoot(rootDiv).render(<Titulos />);
