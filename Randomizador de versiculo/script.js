const versiculos = [
    {
        livro: "João", capitulo: 3, versiculo: 16,  texto: "Por que Deus amou o Mundo de tal maneira que deu seu filho unigênito para que todo aquele que crê nele não pareça mas tenha a vida eterna."
    },
    {
        livro:"Mateus", capitulo: 11, versiculo: 28,  texto:"Venham a mim, todos vocês que estão cansados de carregar suas pesadas cargas, e eu lhes darei descanso."
    },
    {
        livro:"João", capitulo: 16, versiculo:33, texto:"Tenho-vos dito isto, para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo, eu venci o mundo."
    }
];

function sortearVersiculo (){
    const index = Math.floor(Math.random() * versiculos.length)
    const versiculo = versiculos[index];
    return versiculo;
}

function exibirVersiculo() {
    const versiculo = sortearVersiculo();
    document.getElementById("livro").innerHTML = versiculo.livro;
    document.getElementById("capitulo-e-versiculo").innerHTML = `${versiculo.capitulo}:${versiculo.versiculo}`;
    document.getElementById("texto").innerHTML = versiculo.texto;
}

document.getElementById("botao-sortear").addEventListener("click", exibirVersiculo);

