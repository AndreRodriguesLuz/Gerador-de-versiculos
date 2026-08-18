// Lista de versículos bíblicos para o sorteio
const versiculos = [
    { texto: "O Senhor é o meu pastor; nada me faltará.", referencia: "Salmos 23:1" },
    { texto: "Tudo posso naquele que me fortalece.", referencia: "Filipenses 4:13" },
    { texto: "Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore, nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.", referencia: "Josué 1:9" },
    { texto: "Porque Sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.", referencia: "Jeremias 29:11" },
    { texto: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.", referencia: "1 Coríntios 13:4" },
    { texto: "Entregue o seu caminho ao Senhor; confie nele, e ele agirá.", referencia: "Salmos 37:5" },
    { texto: "Mil poderão cair ao teu lado, e dez mil à tua direita, mas tu não serás atingido.", referencia: "Salmos 91:7" },
    { texto: "Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.", referencia: "1 Pedro 5:7" }
];

// Função que sorteia um versículo da lista
function gerarVersiculo() {
    // Escolhe um número aleatório baseado no tamanho da lista
    const indiceAleatorio = Math.floor(Math.random() * versiculos.length);
    const versiculoSorteado = versiculos[indiceAleatorio];

    // Coloca o texto e a referência na tela
    document.getElementById('texto-versiculo').innerText = `"${versiculoSorteado.texto}"`;
    document.getElementById('referencia-versiculo').innerText = versiculoSorteado.referencia;
}
