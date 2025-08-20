# Slides-Versionados
Cada commit representa uma versão de um slideshow, cada um mais avançado que o outro.

V2 slider com timer e reposionamento dinamico

    Um slider simples de movimento automatico baseado em um timer que 
    ao passar certo tempo, move o slider track para a esquerda
    com base na largura do slide atual

    1° identificar o primeiro slide

    2° Capturar a largura do primeiro slide

    3° Mover o slider-track para a esquerda com base na largura
    do primeiro slide, assim acultando-o completamente

    4° Após isso , criamos um breve intervalo de tempo para evitar bugs
    e reposicionamos o primeiro slide para o final do slider-track

    6° Após isso realizamos uma sequencia de ações para reorganização do 
    DOM e reset de margem

        desativamos a transição suave para que ao resetarmos a margem
        n se crie um efeito gradual e simplesmente pareça que não aconteceu nada
        visto que no JS as ações são feitas em ordem

        Depois forçamos o reflow já que em alguns navegadores podem tentar otimizar os calculos
        e ações do JS assim "pulando" etapas necessarias para evitar glitchs e bugs.


            No navegador, mudanças no layout (como margin, posição, tamanho) nem sempre são aplicadas imediatamente. O motor de renderização acumula essas alterações e só atualiza a tela quando for realmente necessário, para economizar desempenho.

            👉 Quando usamos:

                void track.offsetWidth;


                ou seja, acessamos uma propriedade que depende do layout real, o navegador é forçado a calcular de imediato o estilo e o layout atualizados (reflow).

            Isso garante que a linha:

            track.style.transition = 'all linear 0.5s';


            seja aplicada somente depois que o reset já foi efetivado, evitando que o navegador “junte” as operações e crie glitches (como animação indevida no reset da margem).

            📌 Resumindo:

                Reflow = recalcular as posições/tamanhos de elementos na página.

                Usar track.offsetWidth = obrigar o navegador a aplicar as mudanças naquele instante.

                Serve para garantir que o reset da margem seja “instantâneo”, antes de reativar a transição.

        Após isso reativamos a transição suave
        

    track.style.transition = 'none';              // Desativa a transição suave
    track.style.marginLeft = '0px';               // Volta pra posição inicial
    void track.offsetWidth;                       // Força reflow
    track.style.transition = 'all linear 0.5s';   // Reativa animação
