function onReadability(){
    var fleschKincaidGradeLevel = getFleschKincaidGradeLevel($("#kincaid").val(text_readability));
    $("#kincaid").val(fleschKincaidGradeLevel);
}

function getFleschKincaidGradeLevel(inputText){
    var TS = require('TextStatistics.js');
    var ts = TS();
    return ts.fleschKincaidGradeLevel(inputText);
}
