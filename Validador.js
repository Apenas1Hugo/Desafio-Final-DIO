function identificarBandeira(numeroCartao) {
    // Remove espaços e caracteres não numéricos
    const numero = numeroCartao.replace(/\D/g, "");

    if (numero.length < 4) {
        return "Número inválido";
    }

    const primeiros1 = parseInt(numero.substring(0, 1));
    const primeiros2 = parseInt(numero.substring(0, 2));
    const primeiros3 = parseInt(numero.substring(0, 3));
    const primeiros4 = parseInt(numero.substring(0, 4));

    // Visa
    if (primeiros1 === 4) {
        return "Visa";
    }

    // MasterCard
    if (
        (primeiros2 >= 51 && primeiros2 <= 55) ||
        (primeiros4 >= 2221 && primeiros4 <= 2720)
    ) {
        return "MasterCard";
    }

    // American Express
    if (primeiros2 === 34 || primeiros2 === 37) {
        return "American Express";
    }

    // Discover
    if (
        primeiros4 === 6011 ||
        primeiros2 === 65 ||
        (primeiros3 >= 644 && primeiros3 <= 649)
    ) {
        return "Discover";
    }

    // Hipercard
    if (primeiros4 === 6062) {
        return "Hipercard";
    }

    // Elo (prefixos mais comuns)
    const prefixosElo = [
        4011, 4312, 4389, 4514, 4576,
        5041, 5066, 5067, 5090,
        6277, 6362, 6363, 6504, 6505, 6509
    ];

    if (prefixosElo.includes(primeiros4)) {
        return "Elo";
    }

    return "Bandeira desconhecida";
}
