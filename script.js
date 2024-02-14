var no_counter = 1
const no_messages = ["... you clicked the wrong one", "Are you sure??", "Ok real funny..", "Damn why do I bother", "Yeah what are you gonna do about it now"];
// document.getElementById('noBtn').addEventListener('click', function() {
//     this.style.transform = 'scale(0.9)';
//     no_counter += 1;
//     console.log(no_counter);
// });

function yesFunction(){
    // document.getElementById('yesBtn').addEventListener('click', function() {
    //     alert('Yay! Happy Valentine\'s Day!'); // Show an alert message
    //     window.location.href = 'thankyou.html'; // Redirect to a different page
    // });
    document.getElementById('yesBtn').classList.add('clicked');
    var cardElement = document.querySelector('.card');
    cardElement.classList.add('flip');
    window.location.href = 'crossword.html';
}


function testFunction() {
    document.getElementById('noBtn').style.transform = `scale(${1-no_counter/5})`;
    document.getElementById('yesBtn').style.transform = `scale(${1+no_counter/5})`;
    document.getElementById('message').textContent = no_messages[no_counter-1];
    document.getElementById('gifimage').src = "Images\\madBuny.gif";
    if (no_counter == 5){
        document.getElementById('gifimage').src = "Images\\sighingBunny.gif";
    };
    no_counter += 1;
    console.log(`scale(${1-no_counter})`);
};

// Function to open the mini-game modal
function openMiniGame() {
    // Show the modal overlay
    document.getElementById('modal').style.display = 'block';
}

// Call the function to open the mini-game modal when the website is loaded
// window.onload = function() {
//     openMiniGame();
// };

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Retrieve selected answers
    var q1 = document.getElementById('q1').value;
    var q2 = document.getElementById('q2').value;
    var q3 = document.getElementById('q3').value;
    
    // Check answers
    var score = 0;
    if (q1 === 'red') score++;
    if (q2 === 'rose') score++;
    if (q3 === 'february 14th') score++;

    // Display score
    //alert('Your score: ' + score + '/3');

    // Check if the user's score is perfect (3/3) and close the modal if so
    if (score === 3) {
        document.getElementById('modal').style.display = 'none'; // Hide the modal
    };
});

function FlagFunction(){
    document.getElementById('croatianFlag').classList.toggle('rotating');
    var flag2 = document.getElementById('croatianFlag');
    var flag = document.querySelector('.croatian-flag img');
    var audio = document.getElementById('nationalAnthem');
    if (flag2.classList.contains('rotating')) {
        audio.play(); // Start playing the audio when flag starts rotating
        flag.style.transform = 'scale(10)'; // Make the flag bigger when rotating
    } else {
        audio.pause(); // Pause the audio when flag stops rotating
        flag.style.transform = 'scale(1)'; // Reset the flag size
    }
}
// document.getElementById('croatianFlag').addEventListener('click', function() {
//     this.classList.add('centered'); // Add class to center the flag
// });

