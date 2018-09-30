var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbycqwLnLUcWN4W0CWkFSogURvdv6jTwSv0FouDKYzMJfP9qpIa4/exec';

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
      success: function(success){
    console.log("Data Saved.")
}
  })

})