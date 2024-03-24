let number = Math.floor(Math.random() * 20 +1);
console.log(number);

var count=0;
var high_score=0;
document.querySelector('.checkbtn').addEventListener('click',function(){
    
    const user_number = Number(document.querySelector('.guess').value);
    
    console.log(user_number);

    if(user_number===number){
        document.querySelector('.message').textContent="Correct Guess";
        document.querySelector('.number').textContent=user_number;
    }
    else if(user_number==''){
        document.querySelector('.message').textContent="Guess the number";
    }
    else if(user_number<number){
        document.querySelector('.message').textContent="Guess a big number";
        count++;
    }
    else if(user_number>number){
        document.querySelector('.message').textContent="Guess a small number";
        count++;
    }

    console.log("the count is" + count);

    var score = document.querySelector('.score span').textContent=count;
    // var score = document.querySelector('.score span').appendChild=count;
    console.log("the score is" + score);
    
    if(score>high_score){
        high_score=score;
        document.querySelector('.high_score span').textContent=high_score;
    }
    else{
        document.querySelector('.high_score span').textContent=high_score;
    }

    console.log("the high_score is" + high_score);
})
