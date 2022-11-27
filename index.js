function kickf(){
    var audio = new Audio('Sounds/Kick.wav');
    audio.play();
}

function snaref(){
    var audio = new Audio('Sounds/Snare.wav');
    audio.play();
}

function hatf(){
    var audio = new Audio('Sounds/Hat.wav');
    audio.play();
}

function tom1f(){
    var audio = new Audio('Sounds/Tom1.wav');
    audio.play();
}

function tom2f(){
    var audio = new Audio('Sounds/Tom2.wav');
    audio.play();
}

function tom3f(){
    var audio = new Audio('Sounds/Tom3.wav');
    audio.play();
}

function tom4f(){
    var audio = new Audio('Sounds/Tom4.wav');
    audio.play();
}

document.addEventListener("keypress",function(event){
    var keyCase = event.key;
    switch (keyCase) {
        case 'a':
            kickf();
            anim('a');
            break;
        case 's':
            snaref();
            anim('s');
            break;
        case 'd':
            hatf();
            anim('d');
            break;
        case 'f':
            tom1f();
            anim('f');
            break;
        case 'g':
            tom2f();
            anim('g');
            break;
        case 'h':
            tom3f();
            anim('h');
            break;
        case 'j':
            tom4f();
            anim('j');
            break;
        default:
            break;
    }
})

function anim(c){
    document.querySelector("."+c).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+c).classList.remove("pressed")
    },50);
    
}