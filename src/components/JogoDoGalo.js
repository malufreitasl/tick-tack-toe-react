import { useJogoDoGalo } from "../hooks/useJogoDoGalo";
import styles from "../styles/JogoDoGalo.module.css";

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
                <p className={styles.authors}>By Diego and Malu</p>
            </div>
            <div className={styles.tabuleiro}>
                {jogo.tabuleiro.map((row, rowIndex) => 
                    <div className={styles.row}>
                        {row.map((cell, cellIndex) => (
                            <div className={styles.cell} onClick={() => handleClick(rowIndex, cellIndex)}>
                                {cell}
                             </div>
                    ))}
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