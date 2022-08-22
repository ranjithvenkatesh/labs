$(document).ready(function() {
    console.log("Loaded Toastmasters Timer!");
    $("#speech").click();
    onSpeech();
});

function onTableTopics() {
    console.log("Clicked Table Topics...");
    // Set Green, Yellow and Red limits
    $("#greenTime").val("1:00");
    $("#yellowTime").val("1:30");
    $("#redTime").val("2:00");

    $("#currentTime").val("1:00");
};

function onEvaluation() {
    console.log("Clicked Evaluation...");
    // Set Green, Yellow and Red limits
    $("#greenTime").val("2:00");
    $("#yellowTime").val("2:30");
    $("#redTime").val("3:00");

    $("#currentTime").val("2:00");
};

function onSpeech() {
    console.log("Clicked Speech...");
    // Set Green, Yellow and Red limits
    $("#greenTime").val("5:00");
    $("#yellowTime").val("6:00");
    $("#redTime").val("7:00");

    $("#currentTime").val("5:00");
};

var timer = null;

function onStart() {
    console.log("onStart...");
    timer = setInterval(timerFunc, 1000);
    $(document.body).css("background-color", "green");
    $("#start").prop("disabled", true);
    $("#stop").prop("disabled", false);
    $("#resume").prop("disabled", false);
    $("#reset").prop("disabled", false);
};

function timerFunc() {        
    console.log("timerFunc:" + Date.now);
    var currentTime = $("#currentTime").val();
    console.log("currentTime:" + currentTime);
    var parts = currentTime.split(':');
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
    $("#currentTime").val(newMinutes + ":" + newSeconds);
    console.log("newTime:" + newMinutes + ":" + newSeconds);        
}

function updateBackgroundColor(newTime) {
    var greenTime = $("#greenTime").val();
    var yellowTime = $("#yellowTime").val();
    var redTime = $("#redTime").val();
    if (newTime >= greenTime && newTime < yellowTime) {
        $(document.body).css("background-color", "green");
    }
    else if (newTime >= yellowTime && newTime < redTime) {
        $(document.body).css("background-color", "yellow");
    }
    else if (newTime >= redTime) {
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
    $("#currentTime").val($("#greenTime").val());
    $("#start").prop("disabled", false);
    $("#stop").prop("disabled", true);
    $("#resume").prop("disabled", true);
    $("#reset").prop("disabled", true);
}