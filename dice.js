function handleSubmit () {
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    const number = document.getElementById('number').value;
    
    sessionStorage.setItem("PLAYER1", player1);
    sessionStorage.setItem("PLAYER2", player2);
    sessionStorage.setItem("NUMBER", number);

    return;
}

