function getComputerChoice() {
    let escolha = Math.floor(Math.random() * 3) // Gerar número 0, 1, 2
    // 0 = Pedra, 1 = Papel, 2 = Tesoura
    if (escolha === 0) {
        return 'pedra'
    } else if (escolha === 1) {
        return 'papel'
    } else if (escolha === 2) {
        return 'tesoura'
    }
}

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return 'empate!'
    } else if (playerSelection === 'pedra' && computerSelection === 'papel') {
        return 'você perdeu! Papel > Pedra'
    } else if (playerSelection === 'pedra' && computerSelection === 'tesoura') {
        return 'você ganhou! Pedra > Tesoura'
    } else if (playerSelection === 'papel' && computerSelection === 'pedra') {
        return 'você ganhou! Papel > Pedra'
    } else if (playerSelection === 'papel' && computerSelection === 'tesoura') {
        return 'você perdeu! Tesoura > Papel'
    } else if (playerSelection === 'tesoura' && computerSelection === 'pedra') {
        return 'você perdeu! Pedra > Tesoura'
    } else if (playerSelection === 'tesoura' && computerSelection === 'papel') {
        return 'você ganhou! Tesoura > Papel'
    }
}

function jogo() {
    const escolhas = ['pedra', 'papel', 'tesoura']
    let playerSelection
    while ( ! (escolhas.includes(playerSelection)) ) {
        playerSelection = prompt('Pedra, papel ou tesoura?').toLowerCase()
    }
    console.log(`Você escolheu: ${playerSelection}`)
    let computerSelection = getComputerChoice()
    console.log(`O computador escolheu: ${computerSelection}`)
    return round(playerSelection, computerSelection)
}