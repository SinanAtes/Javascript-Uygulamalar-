let Question = function(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.checkAnswer = function(answer){
    return (this.answer === answer);
}

let q1 = new Question("En iyi programlama dili?",["Java","Javascript","C#","Python"],"Javascript");
let q2 = new Question("En iyi web programlama dili?",["Php","Asp.Net","Html","Css"],"Asp.Net");
let q3 = new Question("Hangisi bir javascript framework değildir?",["Vue.js","Angular","Css","React"],"Css");

let questions = [q1,q2,q3];

//console.log( q1.checkAnswer("Javascript"));


// let text = document.querySelector("#questionText");
// text.innerHTML = q1.text;