homescore = document.getElementById("homw-el")

guestScore = document.getElementById("guest-el")
let count = 0

let countg = 0


function incrementone() {
    count += 1
    homescore.textContent = count
   
}
function incrementtwo() {
    count += 2
    homescore.textContent = count
   
}
function incrementthree() {
    count += 3
    homescore.textContent = count
    
}

function gincrementone() {
    countg += 1
   
    guestScore.textContent = countg
}
function gincrementtwo() {
    countg += 2
   
    guestScore.textContent = countg
}
function gincrementthree() {
    countg += 3
 
    guestScore.textContent = countg
}







