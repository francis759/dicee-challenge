function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

let randomNumber1 = generateRandomNumber(1,6);
let randomNumber2 = generateRandomNumber(1,6);

function playGame(){
    let result = "";
    document.getElementsByClassName('img1')[0].setAttribute('src',"images/dice"+ randomNumber1 +".png" );
    document.getElementsByClassName('img2')[0].setAttribute('src', "images/dice"+ randomNumber2 +".png" );

     if(randomNumber1 > randomNumber2){
                result+="player 1 wins!";
        }
        else if(randomNumber1 < randomNumber2){
                result+="player 2 wins!";
        }
        else{
                result+="It's a Draw";
        }
        document.getElementsByTagName('h1')[0].innerHTML=result;
}
document.getElementsByClassName("container")[0].addEventListener('onLoad',playGame());
