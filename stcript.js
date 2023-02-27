function touchRock() {
    var userName = prompt('Qual o seu nome?', 'Digite seu nome aqui.')

    if (userName) {
        alert('Prazer em conhecer você, ' + userName + '!')
        document.getElementById('rockImg').src = './assets/rock_happy.png'

        document.getElementById('text').innerText = 'Olá, ' + userName + '!'
    }
}
