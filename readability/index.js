function onReadability(){
    var inputText = $("#text_readability").val();
    $("#kincaid").val(getFleschKincaidGradeLevel(inputText));
    $("#gunningFogScore").val(getGunningFogScore(inputText));
    $("#colemanLiauIndex").val(getColemanLiauIndex(inputText));
}

function getFleschKincaidGradeLevel(inputText){
    return TextStatistics.prototype.fleschKincaidGradeLevel(inputText);
}

function getGunningFogScore(inputText){
    return TextStatistics.prototype.gunningFogScore(inputText);
}

function getColemanLiauIndex(inputText){
    return TextStatistics.prototype.colemanLiauIndex(inputText);
}
