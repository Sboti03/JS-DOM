let kedvencek = [
    'Gyűrűk ura',
    'Harry Potter'

]

function kedvencekBetoltese() {
    for (let k of kedvencek) {
        
    }
}


function init() {
    document.getElementById('kedvencBetoltesGomb').addEventListener('click', kedvencekBetoltese)
}

document.addEventListener('DOMContentLoaded', init)