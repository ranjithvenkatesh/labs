function onReadability(){
    var inputText = $("#text_readability").val();
    $("#kincaid").val(getFleschKincaidGradeLevel(inputText));
    $("#gunningFogScore").val(getGunningFogScore(inputText));
}

function getFleschKincaidGradeLevel(inputText){
    return TextStatistics.prototype.fleschKincaidGradeLevel(inputText);
}

function getGunningFogScore(inputText){
    return TextStatistics.prototype.gunningFogScore(inputText);
}
