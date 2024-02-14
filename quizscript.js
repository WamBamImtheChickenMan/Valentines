// Function to open the mini-game modal
function openMiniGame() {
    // Show the modal overlay
    document.getElementById('modal').style.display = 'block';
}

// Call the function to open the mini-game modal when the website is loaded
window.onload = function() {
    openMiniGame();
};

function submitButton(){
    event.preventDefault();
    var q1 = document.getElementById('q1');
    var q2 = document.getElementById('q2');
    var q3 = document.getElementById('q3');
    var q4 = document.getElementById('q4');
    var q5 = document.getElementById('q5');

    var score = 0;
    if (q1.value === 'red'){ 
        score++;
        q1.style.color = "green";
    } else {
        q1.style.color = "red";
    };
    if (q2.value === 'rose') {
        score++;
        q2.style.color = "green";
    } else {
        q2.style.color = "red";
    };
    if (q3.value === 'february 14th') {
        score++;
        q3.style.color = "green";
    } else {
        q3.style.color = "red";
    };
    if (q4.value === '3') {
        score++;
        q4.style.color = "green";
    } else {
        q4.style.color = "red";
    };
    if (q5.value === '3') {
        score++;
        q5.style.color = "green";
    } else {
        q5.style.color = "red";
    };


    if (score === 5) {
        document.getElementById("modal").style.display = 'none'; // Hide the modal
        console.log('test');
        alert("You have been granted access.\nWhatever you do, do not provoke Croatia");
    } else {
        alert("That ain't it cheif. \nScore = " + String(score));
    };
}

// document.getElementById('quizForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting
    
//     // Retrieve selected answers
//     var q1 = document.getElementById('q1').value;
//     var q2 = document.getElementById('q2').value;
//     var q3 = document.getElementById('q3').value;
    
//     // Check answers
//     var score = 0;
//     if (q1 === 'red') score++;
//     if (q2 === 'rose') score++;
//     if (q3 === 'february 14th') score++;

//     // Display score
//     //alert('Your score: ' + score + '/3');

//     // Check if the user's score is perfect (3/3) and close the modal if so
//     if (score === 3) {
//         document.getElementById("modal").style.display = 'block'; // Hide the modal
//         console.log('test');
//     };
// });