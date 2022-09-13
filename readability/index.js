function onReadability(){
    var fleschKincaidGradeLevel = getFleschKincaidGradeLevel($("#kincaid").val(text_readability));
    $("#kincaid").val(fleschKincaidGradeLevel);
}

function getFleschKincaidGradeLevel(inputText){
    return TextStatistics.fleschKincaidGradeLevel(inputText);
}
