//Cria aqui o teu componente

import { useJogoDoGalo } from "../hooks/useJogoDoGalo";
import styles from "../styles/JogoDoGalo.module.css";

// Ver facilmente quem é o jogador atual, se o jogo ainda não tiver terminado;
// Ver se o jogo já terminou;
// Ver facilmente quem foi o vencedor, se existir;
// Ver o tabuleiro atual;
// Adicionar uma jogada, clicando numa casa vazia;
// Reiniciar o jogo em qualquer momento.

export function JogoDoGalo() {
    const {
        jogo,
        verificarFimDoJogo,
        adicionarJogada,
        verificarVencedor,
        reiniciarJogo
    } = useJogoDoGalo()
    
    function handleClick(linha, coluna) {
        if(jogo.tabuleiro[linha][coluna] === " ") {
            if(!verificarFimDoJogo(jogo)){
                return adicionarJogada(jogo, jogo.jogadorAtual, linha, coluna)
            }    
        }
    }

    function handleWinner(){
        if(verificarFimDoJogo(jogo)){
            if(verificarVencedor(jogo)){
                return <h3>O vencedor é: {verificarVencedor(jogo)}</h3>
            }
            else{
                return <h3>Não houve vencedores</h3>
            }
        }
    } 
    
    return (
        <div className={styles.container}>
            <div>
                <h1>Jogo Do Galo 🐓</h1>
                <p className={styles.autors}>By Diego and Malu</p>
            </div>
            <div className={styles.tabuleiro}>
                {jogo.tabuleiro.map((linha, indexLinha) => 
                    <div className={styles.row}>
                        {linha.map((coluna, indexColuna) => {
                            return <div className={styles.casa} onClick={() => handleClick(indexLinha,indexColuna)}>
                                {jogo.tabuleiro[indexLinha][indexColuna]}
                                </div>
                    })}
                    </div>
                    )}          
            </div>
            <div className={styles.descriptor}>
                {!verificarFimDoJogo(jogo)? <h3>O jogador atual é: {jogo.jogadorAtual}</h3>: <h3 className={styles.end}>Fim do jogo!</h3>}
            </div>
            <div>
                <button className="button" onClick={() => reiniciarJogo()}>Reiniciar</button>
            </div>
            <div>
                {handleWinner()} 
            </div>
        </div>
    )
}