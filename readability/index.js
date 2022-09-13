function onReadability(){
    var fleschKincaidGradeLevel = getFleschKincaidGradeLevel($("#text_readability").val());
    $("#kincaid").val(fleschKincaidGradeLevel);
}

function getFleschKincaidGradeLevel(inputText){
    return TextStatistics.prototype.fleschKincaidGradeLevel(inputText);
}
