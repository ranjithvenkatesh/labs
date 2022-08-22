window.addEventListener("load", function () {
    // do things after the DOM loads fully
    console.log("Everything is loaded");
});

document.addEventListener("DOMContentLoaded", function () {
    // do things after the DOM loads partially
    console.log("DOM is loaded");
});

$(document).ready(function() {
    console.log("Loaded Toastmasters Timer!");
    $("#speech").click();
    onSpeech();
});

function onTableTopics() {
    console.log("Clicked Table Topics...");
    // Set Green, Yellow and Red limits
    $("#green_time").val("1:00");
    $("#yellow_time").val("1:30");
    $("#red_time").val("2:00");

    $("#current_time").val("0:00");
};

function onEvaluation() {
    console.log("Clicked Evaluation...");
    // Set Green, Yellow and Red limits
    $("#green_time").val("2:00");
    $("#yellow_time").val("2:30");
    $("#red_time").val("3:00");

    $("#current_time").val("0:00");
};

function onSpeech() {
    console.log("Clicked Speech...");
    // Set Green, Yellow and Red limits
    $("#green_time").val("5:00");
    $("#yellow_time").val("6:00");
    $("#red_time").val("7:00");

    $("#current_time").val("0:00");
};

var timer = null;

function onStart() {
    console.log("onStart...");
    timer = setInterval(timerFunc, 1000);
    $(document.body).css("background-color", "white");
    $("#start").prop("disabled", true);
    $("#stop").prop("disabled", false);
    $("#resume").prop("disabled", false);
    $("#reset").prop("disabled", false);
};

function timerFunc() {        
    console.log("timerFunc:" + Date.now);
    var current_time = $("#current_time").val();
    console.log("current_time:" + current_time);
    var parts = current_time.split(':');
    var seconds = parts[0] * 60 + parseInt(parts[1]);
    var newMinutes = Math.floor(seconds / 60, 0);
    console.log("newMinutes:" + newMinutes);
    var newSeconds = seconds % 60 + 1;
    if (newSeconds == 60) {
        newSeconds = "00";
        newMinutes = newMinutes + 1;
    }
    console.log("newSeconds:" + newSeconds);
    var newSecondsLength = newSeconds.toString().length;
    console.log("newSeconds.length:" + newSecondsLength);
    if (newSecondsLength == 1) {
        newSeconds = "0" + newSeconds;
    }
    updateBackgroundColor(newMinutes + ":" + newSeconds);
    $("#current_time").val(newMinutes + ":" + newSeconds);
    console.log("newTime:" + newMinutes + ":" + newSeconds);        
}

function updateBackgroundColor(newTime) {
    var green_time = $("#green_time").val();
    var yellow_time = $("#yellow_time").val();
    var red_time = $("#red_time").val();
    if (newTime >= green_time && newTime < yellow_time) {
        $(document.body).css("background-color", "green");
    }
    else if (newTime >= yellow_time && newTime < red_time) {
        $(document.body).css("background-color", "yellow");
    }
    else if (newTime >= red_time) {
        $(document.body).css("background-color", "red");
    }
}

function onStop() {
    console.log("onStop...");
    clearInterval(timer);
    $("#start").prop("disabled", true);
    $("#stop").prop("disabled", true);
    $("#resume").prop("disabled", false);
    $("#reset").prop("disabled", false);
}

function onResume() {
    console.log("onResume...");
    timer = setInterval(timerFunc, 1000);
    $("#start").prop("disabled", true);
    $("#stop").prop("disabled", false);
    $("#resume").prop("disabled", true);
    $("#reset").prop("disabled", true);
}

function onReset() {
    console.log("onReset...");
    clearInterval(timer);
    $(document.body).css("background-color", "white");
    $("#current_time").val($("#green_time").val());
    $("#start").prop("disabled", false);
    $("#stop").prop("disabled", true);
    $("#resume").prop("disabled", true);
    $("#reset").prop("disabled", true);
}