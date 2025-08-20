# Slides-Versionados
Cada commit representa uma versão de um slideshow, cada um mais avançado que o outro.

V3 Um slider infinito automático baseado em um timer, mas que agora também permite navegação manual
com botões prev e next.

    Quando o usuário interage, o timer é resetado para manter o fluxo contínuo.

    1. Identificação e Timer

        O que é feito:

            Selecionamos o slider-track e os botões prev e next.
            Criamos um setInterval que chama automaticamente nextSlide() a cada 6 segundos.

        Por quê:
            Isso garante que o slider continue rodando sozinho, mas permita pausa/reset ao interagir.


    2. Reset do Timer

        O que é feito:
            Ao clicar em qualquer botão, o timer é limpo e reiniciado.

        Por quê:
            Evita múltiplos intervals acumulados e mantém o controle único do fluxo automático.


    3. Função nextSlide()

        Passos:

            Captura o primeiro slide e sua largura.

            Move o slider-track para a esquerda com margin-left: -larguraDoSlide.

            Após o fim da transição:

                Move o primeiro slide para o final (append).

                Desativa a transição (transition: none).

                Reseta a margem para 0px.

                Força o reflow (void track.offsetWidth).

                Reativa a transição (transition: all linear 0.5s).

        Por quê:

            Esse ciclo cria a ilusão de movimento infinito para a direita (próximo slide).


    4. Função prevSlide()

        Passos:

            Captura o último slide e sua largura.

            Coloca o último slide no início (prepend).

            Sem transição, desloca o track para margin-left: -larguraDoSlide (como se já estivesse um passo à esquerda).

                OBS: embora o JS realize os codigos em ordem , certas ações são sincronas e são realizadas 
                quase que instantaneamente então o slide ao mesmo tempo que é posicionado no começo 
                a margem tbm é mudada sem efeito visual aparente por estar sem a animação

            Força o reflow (void track.offsetWidth).

            Com transição ativa, anima o margin-left de -larguraDoSlide para 0.

        Por quê:

            Cria a ilusão de que voltamos um slide para a esquerda.