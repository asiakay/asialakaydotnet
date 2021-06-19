// contact.js make Ajax request to saveContact.php with form submit values to process form values at server end
function submitForm(){
    $.ajax({
       type: "POST",
       url: "saveContact.php",
       cache:false,
       data: $('form#contactForm').serialize(),
       success: function(response){
           $("#contact").html(response)
           $("#contact-modal").modal('hide');
       },
       error: function(){
           alert("Error");
       }
   });
}