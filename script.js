$(document).ready(function() {

    var iCnt = 0;
    
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    var container = $(document.createElement('div')).css({
        padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
        borderTopColor: '#999', borderBottomColor: '#999',
        borderLeftColor: '#999', borderRightColor: '#999'
    });

    $('#btAdd').click(function() {
        
            iCnt = iCnt + 1;

            // ADD TEXTBOX.
            $(container).append('<input type=text class="input" id=txtbox' + iCnt + ' ' +                                    
                                'value="Input Here ' + iCnt + '" />');

            // SHOW SUBMIT BUTTON IF ATLEAST "1" ELEMENT HAS BEEN CREATED.
            if (iCnt == 1) {

                var divSubmit = $(document.createElement('div'));
                $(divSubmit).append('<input type=button class="bt"' + 
                                    'onclick="GetTextValue()"' + 
                                    'id=btSubmit value=Submit />');

            }

            // ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
            $('#main').after(container, divSubmit);
        
    });


});

// PICK THE VALUES FROM EACH TEXTBOX WHEN "SUBMIT" BUTTON IS CLICKED.
var divValue, values = '';

function GetTextValue() {

    $(divValue) 
        .empty() 
        .remove(); 

    values = '';

    $('.input').each(function() {
        divValue = $(document.createElement('div')).css({
            padding:'5px', width:'200px'
        });
        values += this.value + '<br />'
    });

    $(divValue).append('<p><b>Your selected values</b></p>' + values);
    $('body').append(divValue);
}