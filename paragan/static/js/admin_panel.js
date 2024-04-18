function add_fund(){
    amount_input = document.getElementById('amount_input').value

    return amount_input
}

function send_request(action, user_id){
    var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
    amount = add_fund()
    url = window.location.href

    var data = {'action':action, 'user_id':user_id, 'amount':amount}
    $.ajax(
        {
            type: 'POST',
            url: url,
            headers: { "X-CSRFToken": csrftoken },
            data: data,
            success: function(responce){
                alert(responce['message'])
            },
            error: function(xhr, status, error){
                alert(error)
            }
        }
    )
}