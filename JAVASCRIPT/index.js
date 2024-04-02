let number = Math.floor(Math.random() * 20 +1);
console.log("the num is" + number);

var count=20;
var high_score=0;
document.querySelector('.checkbtn').addEventListener('click',function(){
    
    const user_number = Number(document.querySelector('.guess').value);
    
    // console.log(user_number);


    // if(!user_number){
    //    document.querySelector('.message').textContent="Guess the number";
    //    document.querySelector('.message').style.color="red";
    // }

    if(user_number==''){
        document.querySelector('.message').textContent="Guess the number";
        document.querySelector('.message').style.color="red";
    }

    if(user_number>20 || user_number<1){                        
        document.querySelector('.message').textContent="Guess the number between 1 to 20 only";
        document.querySelector('.message').style.color="red";
    }

    else if(user_number===number){
        document.querySelector('.message').textContent="Correct Guess";
        document.querySelector('.number').textContent=user_number;
        document.querySelector('body').style.backgroundColor="green";

        if(score>high_score){
            high_score=score;
            document.querySelector('.high_score span').textContent=high_score;
        }
        // console.log("the high_score is" + high_score);
    }

    else if(user_number<number){
        if(count>1){
            document.querySelector('.message').textContent="Guess a big number";
            document.querySelector('.message').style.color="white";
            count--;
        }
        else{
            document.querySelector('.message').textContent="You Loose the game!"
            document.querySelector('body').style.backgroundColor="red";
        }
    }
    else if(user_number>number){
        if(count>1){
            document.querySelector('.message').textContent="Guess a small number";
            document.querySelector('.message').style.color="white";
            count--;
        }
        else{
            document.querySelector('.message').textContent="You Loose the game!"
            document.querySelector('body').style.backgroundColor="red";
        }
    }

    // console.log("the count is" + count);

    score = document.querySelector('.score span').textContent=count;
    // console.log("the score is" + score);
})


document.querySelector('.again button').addEventListener('click',function(){

    number = Math.floor(Math.random() * 20 +1);
    console.log("num" + number);
    count=20;

    document.querySelector('.score span').textContent=count;
    document.querySelector('.high_score span').textContent=high_score;
    console.log(score)
    document.querySelector('.guess').value="";
    document.querySelector('.number').textContent="?";
    document.querySelector('.message').textContent="Start Guessing...";

    document.querySelector('body').style.backgroundColor="black";
})
