function clicou () {
    var r = document.getElementById('resposta')
    var res = String(r.value)
    var img = document.getElementById('imagem')
    var d = document.getElementById('descrição')
    var t = document.getElementById('titulo')
    if (res == 'florzinha' || res == 'Florzinha') {
        window.document.body.style.background = 'pink'
        t.src = 'fotologoflorzinha.png'
        img.src = 'fotoflorzinha.png'
        d.innerHTML = 'É ruiva e usa um laço vermelho gigante prendendo o cabelo e um longo vestido rosa. <strong>Confiante, orgulhosa, batalhadora e egoísta.</strong> Elemento: Tudo que é bom (Everything Nice). Florzinha é a líder das Meninas Superpoderosas com uma perfeita combinação de inteligência, beleza e força! O trabalho dela é fazer com que as meninas estejam sempre preparadas para lutar contra o mal, e manter a verdade e a justiça em Townsville.'
        d.style.color = 'red'
        d.style.background = 'lightpink'

    } else if (res == 'lindinha' || res == 'Lindinha') {
        window.document.body.style.background = 'lightblue'
        t.src = 'fotologolindinha.png'
        img.src = 'fotolindinha.png'
        d.innerHTML = 'É loira e usa duas maria-chiquinhas. Tem olhos azuis da mesma cor de seu vestido. <strong>Doce, sensível, corajosa (mas tem medo do escuro), inocente, observadora</strong>. A mais calminha do trio (Baby of the Powerpuff Girls). Elemento: Açúcar (Sugar). É ela quem carrega a alma das Meninas Superpoderosas. Borboletas são as coisas mais lindas e fofas para ela, se bem que quase tudo que ela vê é fofo para ela. Mas tome muito cuidado, esse anjinho de cabelos dourados pode ser bem perigoso!'
        d.style.color = 'blue'
        d.style.background = 'lightblue'

    } else if (res == 'docinho' || res == 'Docinho') {
        window.document.body.style.background = 'lightgreen'
        t.src = 'fotologodocinho.png'
        img.src = 'fotodocinho.png'
        d.innerHTML = 'Cabelos curtos e pretos, olhos verdes da cor do vestido. <strong>Agressiva, tem bom senso, forte, porém esconde seu lado sensível</strong>. "A Lutadora Mais Dura" (The Toughest Fighter). Elemento: Tempero (Spice). Ela tem a atitude de uma Menina Superpoderosa. Só quer saber de ser a mais forte do mundo, e a pior coisa para ela é ter que usar vestido. Docinho gosta de bater primeiro e perguntar depois... ou melhor ainda... deixar que Florzinha tome conta do interrogatório.'
        d.style.color = 'green'
        d.style.background = 'lightgreen'

    } else {
        window.document.body.style.background = 'purple'
        t.src = 'fotologomacacolouco.png'
        img.src = 'fotomacacolouco.png'
        d.innerHTML = 'Quanta insanidade! Você só pode ser... </br>Macaco Louco muitas vezes surge com planos para dominar o mundo e é constantemente interrompido pelas Meninas Superpoderosas. Ele é um notório chimpanzé <strong>gênio</strong> cujo objetivo principal é destruir as Meninas Superpoderosas, esmagar Townsville e conquistar o mundo, nessa ordem.'
        d.style.color = 'purple'
        d.style.background = '#6c8413'


    }
}