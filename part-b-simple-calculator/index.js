let currentExpression = ''

$("button").click(function () {
    

    if (this.innerText == '=') {

        $("#eval-answer").html(eval(currentExpression))
        currentExpression = ''
        $("#current-expression").text('')

    } else {

        currentExpression += $(this).val()
        $("#current-expression").text(currentExpression)
        
    }

});