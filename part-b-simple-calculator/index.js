let currentExpression = ''

$("button").click(function () {
    

    if (this.innerText == '=') {

        try {

            currentResult = eval(currentExpression)

            if (currentResult == currentExpression || currentExpression =='0.' ) {
    
                currentExpression = ''
                $("#eval-answer").html('0.')
                $("#current-expression").text(currentExpression)
    
    
            } else {
    
                $("#eval-answer").html(currentResult)
                currentExpression = currentResult.toString()
                $("#current-expression").text(currentResult)
    
            }


        } catch (error) {

            if (error instanceof SyntaxError ) {

                window.alert('Invalid operation -- Can not evaluate!')

            } else {
                
                console.log(error)

            }
            

        } 


    } else {

        currentExpression += $(this).val()
        $("#current-expression").text(currentExpression)
        
    }

});