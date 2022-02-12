$(document).ready(function(){
    var i = 0;
    $("#signup").on('click',function(){
       

                var name = document.getElementById("name").value;
                var email = document.getElementById("email").value;
                var phoneno= document.getElementById("phoneno").value;
                var password = document.getElementById("password").value;
                
                
                if(name.length==0){
                    i=1;
                    $('#name').addClass('err'); 
                    $('#nameMSG').removeClass('hide'); 
                }
                else{
                    i=0;
                    $('#name').removeClass('err'); 
                    $('#nameMSG').addClass('hide'); 
                }
                if(email.length==0){
                    i=1;
                    $('#email').addClass('err'); 
                    $('#emailMSG').removeClass('hide'); 
                }
                else{
                    i=0;
                    $('#email').removeClass('err'); 
                    $('#emailMSG').addClass('hide'); 
                }
                if(phoneno.length==0){
                    i=1;
                    $('#phoneno').addClass('err'); 
                    $('#phonenoMSG').removeClass('hide'); 
                }else{
                    i=0;
                    $('#phoneno').removeClass('err'); 
                    $('#phonenoMSG').addClass('hide'); 
                }
                if(password.length==0 || password.length<8){
                    i=1;
                    $('#password').addClass('err'); 
                    $('#passwordMSG').text("PASSWORD SHOULD BE 8-20 CHARACTER "); 
                    $('#passwordMSG').removeClass('hide'); 
                }else{
                    i=0;
                    $('#password').removeClass('err'); 
                    $('#passwordMSG').addClass('hide'); 
                }
                if(i==0){
                    $.ajax({
                        url: "includes/signup.php",
                        context: document.body,
                        method:"POST",
                        data:$("#signup-form").serialize(),
                        success: function(data){
                            
                            $('#MSG').text(data);
                        }
				    });
                }

            
    });

});
