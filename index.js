let home_score = document.getElementById("home_screen")
let guest_score = document.getElementById("guest_screen")
let hscore = 0
let gscore = 0

function hplus_one(){
    hscore += 1;
    home_score.innerText = hscore
    console.log(home_score)
}

function hplus_two(){
    hscore += 2;
    home_score.innerText = hscore
    console.log(home_score)
}

function hplus_three(){
    hscore += 3;
    home_score.innerText = hscore
    console.log(home_score)
}

function gplus_one(){
    gscore += 1;
    guest_score.innerText = gscore
    console.log(guest_score)
}

function gplus_two(){
    gscore += 2;
    guest_score.innerText = gscore
    console.log(guest_score)
}

function gplus_three(){
    gscore += 3;
    guest_score.innerText = gscore
    console.log(guest_score)
}
