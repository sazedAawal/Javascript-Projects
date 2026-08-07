var button_colours = [
    'red',
    'blue',
    'green',
    'yellow',
]

var game_pattern = [];
var user_clicked_pattern = [];
var level = 0;
var has_started = false;



// Starting the game
$(document).keypress(function(){
    if (!has_started){
        $('#level-title').text('Level'+level);
        nextSequence();
        has_started = true;
    }
});



// Generating random sequence;
function nextSequence(){
    user_clicked_pattern = [];

    // Determine pattern target
    var target_length;
    if (level === 0){
        target_length = 2;
    } else if (level === 1){
        target_length = 3;
    } else if (level === 2){
        target_length = 4;
    } else if (level === 3){
        target_length = 5;
    } else {
        target_length = 6;
    }

    // Level increment
    level++;
    $("#level-title").text("Level " + level);

    // Generate batch of patterns
    game_pattern = [];
    for (var i = 0; i < target_length; i++){
        var random_number = Math.floor(Math.random() * 4);
        var random_chosen_colour = button_colours[random_number];
        game_pattern.push(random_chosen_colour);
    }

    playSequenceAnimation();
}



// Animate sequence of sounds
function playSequenceAnimation(){
    var i = 0;
    var interval = setInterval(function(){
        var colour = game_pattern[i];
        $('#'+colour).fadeOut(100).fadeIn(100);
        playSound(colour);

        i++;
        if (i >= game_pattern.length){
            clearInterval(interval);
        }
    }, 600);
}


// Play sound of selected button
function playSound(colour){
    var audio = new Audio('./sounds/'+colour+'.mp3');
    return audio.play();
}


// Checking which button is pressed by user
$('.btn').click(function(){
    var user_chosen_colour = $(this).attr('id');
    user_clicked_pattern.push(user_chosen_colour);
    animatePress(user_chosen_colour);
    playSound(user_chosen_colour);

    checkAnswer(user_clicked_pattern.length - 1);
});

// Adding animation to user clicks
function animatePress(current_colour){
    $('#'+current_colour).addClass('pressed');
    setTimeout(function(){
        $('#'+current_colour).removeClass('pressed');
    }, 100);
}


// Evaluating answer
function checkAnswer(current_level){
    if (user_clicked_pattern[current_level] === game_pattern[current_level]){
        if (user_clicked_pattern.length === game_pattern.length){
            console.log('Success!');
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        console.log('Wrong');
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over');
        }, 200);
        $('#level-title').text('Game Over, Press Any Key to Restart!');
        startOver();
    } 
}

// Restart the game
function startOver(){
    level = 0;
    game_pattern = [];
    has_started = false;
}
