const versiculos = [
    {
        livro: "João", capitulo: 3, versiculo: 16,  texto: "Por que Deus amou o Mundo de tal maneira que deu seu filho unigênito para que todo aquele que crê nele não pareça mas tenha a vida eterna."
    },
    {
        livro:"Mateus", capitulo: 11, versiculo: 28,  texto:"Venham a mim, todos vocês que estão cansados de carregar suas pesadas cargas, e eu lhes darei descanso."
    },
    {
        livro:"João", capitulo: 16, versiculo:33, texto:"Tenho-vos dito isto, para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo, eu venci o mundo."
    },
    {
        livro:"Provérbios", capitulo: 4, versiculo:23, texto:"Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida"
    },
    {
        livro:"Filipenses", capitulo: 4, versiculo:6, texto:"Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus."     
    },
    {
        livro:"Gênesis", capitulo: 4, versiculo:7, texto:"Se procederes bem, não é certo que serás aceito? Se, todavia, procederes mal, eis que o pecado jaz à porta; o seu desejo será contra ti, mas a ti cumpre dominá-lo"   
    },
    {
        livro:"1 Pedro", capitulo: 1, versiculo:13, texto:"Como filhos obedientes, não se deixem amoldar pelos maus desejos de outrora, quando viviam na ignorância."
    },
    {
        livro:"Provérbios", capitulo: 16, versiculo:3, texto:" Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos."
    },
    {
        livro:"Deuteronômio", capitulo: 31, versiculo:6, texto:"Sejam fortes e corajosos, não tenham medo, nem fiquem apavorados diante deles, porque o Senhor , seu Deus, é quem vai com vocês; ele não os deixará, nem os abandonará."
    },
    {
        livro:"Provérbios", capitulo: 13, versiculo:20, texto:"O que anda com os sábios ficará sábio, mas o companheiro dos tolos será destruído."
    },
    {
        livro:"Lucas", capitulo: 5, versiculo:"31-32", texto:"Jesus lhes respondeu: 'Não são os que têm saúde que precisam de médico, mas sim os doentes. Eu não vim chamar justos, mas pecadores ao arrependimento.'"
    },
    {
        livro:"Colossenses", capitulo: 3, versiculo:14, texto:"Acima de tudo, porém, revistam-se do amor, que é o elo perfeito."   
    },
    {
        livro:"Eclesiastes", capitulo: 11, versiculo:9, texto:"Alegre-se, jovem, na sua mocidade! Seja feliz o seu coração nos dias da sua juventude! Siga por onde seu coração mandar, até onde a sua vista alcançar; mas saiba que por todas essas coisas Deus o trará a julgamento."
    },
    {
        livro:"Timóteo", capitulo: 4, versiculo:12, texto:"Ninguém o despreze pelo fato de você ser jovem, mas seja um exemplo para os fiéis na palavra, no procedimento, no amor, na fé e na pureza."
    },
    {
        livro:"Salmos", capitulo: 30, versiculo:5, texto:"O choro pode durar uma noite, mas a alegria vem pela manhã."  
    },
    {
        livro:"João", capitulo: 1, versiculo:5, texto:"E a luz resplandece nas trevas, e as trevas não a compreenderam."
    },
    {
        livro:"1 Pedro", capitulo: 5, versiculo: 8, texto:"Sede sóbrios; vigiai; porque o diabo, vosso adversário, anda em derredor, como leão bramando, buscando a quem possa tragar;" 
    },
    {
        livro:"Tiago", capitulo: 4, versiculo: 7, texto:"Sujeitai-vos, pois, a Deus, resisti ao diabo, e ele fugirá de vós." 
    },
    {
        livro:"Romanos", capitulo: 12, versiculo: 2, texto:"Não se amoldem ao padrão deste mundo, mas transformen-se pela renovação da sua mente, para que vocês experimentem a boa, agradável e perfeita vontade de Deus." 
    },
    {
        livro:"Isaías", capitulo: 41, versiculo: 10, texto:"Portanto, não tema, pois estou com você; não desanime, pois eu sou o seu Deus. Vou te fortalecer e te ajudar; Eu vou te sustentar com minha mão direita justa." 
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

