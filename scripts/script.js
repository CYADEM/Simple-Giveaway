var participants = [];
var winners = [];


document.getElementById('add-participants').addEventListener('click', () => {
    const textarea = document.getElementById('participants-input');
    if (textarea.value.length == 0) {
        alert("Debes ingresar los participantes.")
    } else {
        const inputs = textarea.value.split("\n");
        var pIndex = 0;
        inputs.forEach(text => {
            participants[pIndex] = text;
            pIndex++;
        })
        alert("Participantes ingresados correctamente.")
    }
})

document.getElementById('get-winners').addEventListener('click', () => {
    if (participants.length < 1) {
        alert("No hay participantes ingresados.")
    } else {
        const list = document.querySelector('.list')
        const quantity = document.getElementById('winners-quantity').value;
        document.querySelector('.form').style.display = "block";
        list.querySelectorAll('p').forEach(para => para.remove());
        winners = [];
        for(let i = 1; i <= quantity; i++) {
            var participant = participants[Math.floor(Math.random() * quantity)]
            var datos = participant.split(":")
            while(winners.includes(datos[1])) {
                participant = participants[Math.floor(Math.random() * quantity)];
                datos = participant.split(":");
            }
            winners[winners.length] = datos[1];
            const pElement = document.createElement('p');
            pElement.textContent = i +". " + datos[1] + " | " + datos[0];
            list.appendChild(pElement)
            console.log(participant)
        }
    }
})