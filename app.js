var script_url = "https://script.google.com/macros/s/AKfycbycqwLnLUcWN4W0CWkFSogURvdv6jTwSv0FouDKYzMJfP9qpIa4/exec";

function insert_value() {
    var f1 = $("#field_1").val();
    var f2 = $("#field_2").val();
    var f3 = $("#field_3").val();
    var f4 = $("#field_4").val();

    var url = script_url + "?callback=ctrlq&name=" + f1 + "&id=" + f2 + "&email=" + f3 + "&city=" + f3 + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });

   var form =  document.getElementById("resetForm");
   form.reset();
    
    console.log(f1, f2, f3, f4);

}


function ctrlq(e) {
    alert('Congrats! Registered Successfully')
}
