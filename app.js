const bibliotecaVersiculos = [
    // Antigo Testamento
    { texto: "No princípio, criou Deus os céus e a terra.", referencia: "Gênesis 1:1" },
    { texto: "O Senhor é o meu pastor; nada me faltará.", referencia: "Salmos 23:1" },
    { texto: "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo.", referencia: "Salmos 23:4" },
    { texto: "O Senhor é a minha luz e a minha salvação; de quem terei medo?", referencia: "Salmos 27:1" },
    { texto: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.", referencia: "Salmos 46:1" },
    { texto: "Cria em mim, ó Deus, um coração puro e renova dentro de mim um espírito inabalável.", referencia: "Salmos 51:10" },
    { texto: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.", referencia: "Salmos 91:1" },
    { texto: "Nenhum mal te sucederá, nem praga alguma chegará à tua tenda.", referencia: "Salmos 91:10" },
    { texto: "Lâmpada para os meus pés é tua palavra e luz, para o meu caminho.", referencia: "Salmos 119:105" },
    { texto: "Os que confiam no Senhor serão como o monte Sião, que não se abala, mas permanece para sempre.", referencia: "Salmos 125:1" },
    { texto: "Confie no Senhor de todo o seu coração e não se apoie no seu próprio entendimento.", referencia: "Provérbios 3:5" },
    { texto: "Em todos os seus caminhos reconheça o Senhor, e ele endireitará as suas veredas.", referencia: "Provérbios 3:6" },
    { texto: "O temor do Senhor é o princípio da sabedoria.", referencia: "Provérbios 9:10" },
    { texto: "O coração alegre afeiçoa o rosto, mas pela dor do coração o espírito se abate.", referencia: "Provérbios 15:13" },
    { texto: "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.", referencia: "Provérbios 16:3" },
    { texto: "Como a boa água para o sedento, assim são as boas novas vindas de uma terra distante.", referencia: "Provérbios 25:25" },
    { texto: "Há tempo para todo propósito debaixo do céu.", referencia: "Eclesiastes 3:1" },
    { texto: "Melhor é serem dois do que um, porque têm melhor paga do seu trabalho.", referencia: "Eclesiastes 4:9" },
    { texto: "Os que esperam no Senhor renovarão as suas forças; voarão alto como águias.", referencia: "Isaías 40:31" },
    { texto: "Não tema, pois estou com você; não se pavorize, pois sou o seu Deus.", referencia: "Isaías 41:10" },
    { texto: "Ele foi ferido por causa das nossas transgressões e moído por causa das nossas iniquidades.", referencia: "Isaías 53:5" },
    { texto: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano.", referencia: "Jeremias 29:11" },
    { texto: "Buscar-me-eis e me achareis quando me buscardes de todo o vosso coração.", referencia: "Jeremias 29:13" },
    { texto: "As misericórdias do Senhor são a causa de não sermos consumidos; renovam-se cada manhã.", referencia: "Lamentações 3:22-23" },
    { texto: "O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que confiam nele.", referencia: "Naum 1:7" },
    { texto: "Bendito o homem que confia no Senhor, e cuja esperança é o Senhor.", referencia: "Jeremias 17:7" },
    { texto: "Provai e vede que o Senhor é bom; bem-aventurado o homem que nele confia.", referencia: "Salmos 34:8" },
    { texto: "Perto está o Senhor dos que têm o coração quebrantado.", referencia: "Salmos 34:18" },
    { texto: "Agrada-te do Senhor, e ele satisfará os desejos do teu coração.", referencia: "Salmos 37:4" },
    { texto: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.", referencia: "Salmos 37:5" },

    // Novo Testamento
    { texto: "Vocês são a luz do mundo. Não se pode esconder uma cidade construída sobre um monte.", referencia: "Mateus 5:14" },
    { texto: "Busquem pois, em primeiro lugar, o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.", referencia: "Mateus 6:33" },
    { texto: "Peçam, e lhes será dado; busquem, e acharão; batam, e a porta lhes será aberta.", referencia: "Mateus 7:7" },
    { texto: "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso.", referencia: "Mateus 11:28" },
    { texto: "Pois onde estiverem dois ou três reunidos em meu nome, ali eu estou no meio deles.", referencia: "Mateus 18:20" },
    { texto: "Para Deus tudo é possível.", referencia: "Mateus 19:26" },
    { texto: "Eis que estou convosco todos os dias, até a consumação dos séculos.", referencia: "Mateus 28:20" },
    { texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não perca, mas tenha a vida eterna.", referencia: "João 3:16" },
    { texto: "Eu sou o pão da vida; aquele que vem a mim não terá fome.", referencia: "João 6:35" },
    { texto: "E conhecerão a verdade, e a verdade os libertará.", referencia: "João 8:32" },
    { texto: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim.", referencia: "João 14:6" },
    { texto: "Deixo-lhes a paz; a minha paz lhes dou. Não a dou como o mundo a dá.", referencia: "João 14:27" },
    { texto: "No mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.", referencia: "João 16:33" },
    { texto: "Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus.", referencia: "Romanos 8:28" },
    { texto: "Se Deus é por nós, quem será contra nós?", referencia: "Romanos 8:31" },
    { texto: "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente.", referencia: "Romanos 12:2" },
    { texto: "Alegrem-se na esperança, sejam pacientes na tribulação, perseverem na oração.", referencia: "Romanos 12:12" },
    { texto: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.", referencia: "1 Coríntios 13:4" },
    { texto: "Agora, pois, permanecem a fé, a esperança e o amor, estes três; mas o maior destes é o amor.", referencia: "1 Coríntios 13:13" },
    { texto: "Portanto, se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas!", referencia: "2 Coríntios 5:17" },
    { texto: "A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.", referencia: "2 Coríntios 12:9" },
    { texto: "Foi para a liberdade que Cristo nos libertou. Portanto, permaneçam firmes.", referencia: "Gálatas 5:1" },
    { texto: "Mas o fruto do Espírito é: amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio.", referencia: "Gálatas 5:22-23" },
    { texto: "Pela graça vocês são salvos, por meio da fé; e isto não vem de vocês, é dom de Deus.", referencia: "Efésios 2:8" },
    { texto: "Aquele que é capaz de fazer infinitamente mais do que tudo o que pedimos ou pensamos, de acordo com o seu poder que atua em nós.", referencia: "Efésios 3:20" },
    { texto: "Não andem ansiosos por coisa alguma, mas em tudo apresentem seus pedidos a Deus pela oração e pela súplica, com ação de graças.", referencia: "Filipenses 4:6" },
    { texto: "Tudo posso naquele que me fortalece.", referencia: "Filipenses 4:13" },
    { texto: "O meu Deus suprirá todas as necessidades de vocês, de acordo com as suas gloriosas riquezas em Cristo Jesus.", referencia: "Filipenses 4:19" },
    { texto: "Mantenham o pensamento nas coisas do alto, e não nas coisas terrenas.", referencia: "Colossenses 3:2" },
    { texto: "Orem sem cessar. Em tudo deem graças.", referencia: "1 Tessalonicenses 5:17-18" },
    { texto: "Pois Deus não nos deu espírito de covardia, mas de poder, de amor e de moderação.", referencia: "2 Timóteo 1:7" },
    { texto: "Combati o bom combate, terminei a corrida, guardei a fé.", referencia: "2 Timóteo 4:7" },
    { texto: "Ora, a fé é a certeza de coisas que se esperam, a convicção de fatos que se não veem.", referencia: "Hebreus 11:1" },
    { texto: "Jesus Cristo é o mesmo ontem, hoje e para sempre.", referencia: "Hebreus 13:8" },
    { texto: "Se algum de vocês tem falta de sabedoria, peça-a a Deus, que a todos dá livremente.", referencia: "Tiago 1:5" },
    { texto: "Aproximem-se de Deus, e ele se aproximará de vocês.", referencia: "Tiago 4:8" },
    { texto: "Lançando sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.", referencia: "1 Pedro 5:7" },
    { texto: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.", referencia: "1 João 1:9" },
    { texto: "Nós amamos porque ele nos amou primeiro.", referencia: "1 João 4:19" },
    { texto: "Eis que estou à porta e bato. Se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa e comerei com ele, e ele comigo.", referencia: "Apocalipse 3:20" }
];

let versiculosRestantes = [...bibliotecaVersiculos];

function gerarVersiculoSemRepetir() {
    const elTexto = document.getElementById('texto');
    const elRef = document.getElementById('referencia');

    if (!elTexto || !elRef) return;

    if (versiculosRestantes.length === 0) {
        versiculosRestantes = [...bibliotecaVersiculos];
    }

    const indiceSorteado = Math.floor(Math.random() * versiculosRestantes.length);
    const item = versiculosRestantes.splice(indiceSorteado, 1)[0];

    elTexto.innerText = `"${item.texto}"`;
    elRef.innerText = item.referencia;
}