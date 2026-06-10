let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [

{
question:"What is HTML?",
answer:"HTML stands for HyperText Markup Language."
},

{
question:"What is CSS?",
answer:"CSS is used for styling web pages."
},

{
question:"What is JavaScript?",
answer:"JavaScript adds interactivity to websites."
}

];

let currentIndex = 0;

function saveCards(){
localStorage.setItem(
"flashcards",
JSON.stringify(flashcards)
);
}

function displayCard(){

document.getElementById("question").innerText =
flashcards[currentIndex].question;

document.getElementById("answer").innerText =
flashcards[currentIndex].answer;

document.getElementById("answer").classList.add("hidden");
}

function showAnswer(){
document.getElementById("answer").classList.remove("hidden");
}

function nextCard(){

if(currentIndex < flashcards.length - 1){
currentIndex++;
displayCard();
}

}

function prevCard(){

if(currentIndex > 0){
currentIndex--;
displayCard();
}

}

function addCard(){

let question =
document.getElementById("newQuestion").value;

let answer =
document.getElementById("newAnswer").value;

if(question !== "" && answer !== ""){

flashcards.push({
question:question,
answer:answer
});

saveCards();

document.getElementById("newQuestion").value="";
document.getElementById("newAnswer").value="";

alert("Flashcard Added!");

}

}

function editCard(){

let question =
document.getElementById("newQuestion").value;

let answer =
document.getElementById("newAnswer").value;

if(question !== "" && answer !== ""){

flashcards[currentIndex] = {
question:question,
answer:answer
};

saveCards();
displayCard();

alert("Flashcard Updated!");

}

}

function deleteCard(){

if(flashcards.length > 1){

flashcards.splice(currentIndex,1);

if(currentIndex >= flashcards.length){
currentIndex = flashcards.length - 1;
}

saveCards();
displayCard();

alert("Flashcard Deleted!");

}else{

alert("At least one flashcard required.");

}

}

displayCard();