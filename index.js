function calcularSaldoRankeadas(vitorias, derrotas) {
    const saldoRankeadas = vitorias - derrotas;

    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Platina";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else if (vitorias >= 101) {
        return "Imortal";
    } else {
        return "Rank não definido para essa quantidade de vitórias";
    }
}

// exemplo 

const vitoriasJogador = 89;
const derrotasJogador = 20;

const resultadoRankeadas = calcularSaldoRankeadas(vitoriasJogador, derrotasJogador);
console.log(`O jogador está no ranking: ${resultadoRankeadas}`);
