

$(document).ready(function() {

    

    $(".next").click(function() {
       $("#condiciones").slideToggle("slow",function(){
          $("#ocultar").slideToggle("slow",function(){
            
          })
       })
       
       
   })

   

    $('#enviar').click(function () {
        var validar = 0;
                                    
            if($('#user_stp').val() != "" && $('#ticket').val() != ""){
                if ($('#primero').val() == 0 )
                    {
                        $("#msj_err").slideDown("fast",function(){
                            $("#msj_err").text("POR FAVOR SELECCIONAR UNA OPCION EN LA QUINTA CARRERA")
                        });
                    validar = 1;
                    return false;
                    }
                    else if ($('#segundo').val() == 0 )
                        {
                        $("#msj_err").slideDown("fast",function(){
                            $("#msj_err").text("POR FAVOR SELECCIONAR UNA OPCION EN LA SEXTA CARRERA")
                        });
                        validar = 1;
                        return false;
                    }
                    if ($('#tercero').val() == 0 )
                        {
                            $("#msj_err").slideDown("fast",function(){
                            $("#msj_err").text("POR FAVOR SELECCIONAR UNA OPCION EN LA SEPTIMA CARRERA")
                        });
                            validar = 1;
                            return false;
                        }
					if ($('#cuarto').val() == 0 )
                        {
                            $("#msj_err").slideDown("fast",function(){
                            $("#msj_err").text("POR FAVOR SELECCIONAR UNA OPCION EN LA OCTAVA CARRERA")
                        });
                            validar = 1;
                            return false;
                        }
                    else if ($('#quinto').val() == 0 )
                        {
                           $("#msj_err").slideDown("fast",function(){
                            $("#msj_err").text("POR FAVOR SELECCIONAR UNA OPCION EN LA NOVENA CARRERA")
                        });
                            validar = 1;
                            return false;
                        }
                    if ($('#sexto').val() == 0 )
                        {
                           $("#msj_err").slideDown("fast",function(){
                            $("#msj_err").text("POR FAVOR SELECCIONAR UNA OPCION EN LA DECIMA CARRERA")
                        });
                            validar = 1;
                            return false;
                        }
                    } else{
                            if ($('#user_stp').val() == "" )
                                {
                                   $("#msj_err").slideDown("fast",function(){
                            $("#msj_err").text("POR FAVOR INGRESE SU SP")
                            $("#user_stp").css("background","rgb(247, 216, 216)")
                        });
                                    validar = 1;
                                    return false;
                                }
                            else if ($('#ticket').val() == "" )
                                {
                                    $("#msj_err").slideDown("fast",function(){
                            $("#msj_err").text("POR FAVOR INGRESE SU NUMERO DE TICKET")
                            $("#ticket").css("background","rgb(247, 216, 216)")
                        });
                                    validar = 1;
                                    return false;
                                        }
                             }
                                    
                                    if(validar == 0) {
                                         $("#msj_err").slideDown("fast",function(){
                            $("#msj_err").text("REPORTADO EXITOSAMENTE").removeClass("alert-danger").addClass("alert-success")
                        });
                                        
                                        reportar_pronostico('php/pronostico.php', '', '');
                                        $("#formulario").submit();
                                    } else{
                                        return false;
                                    }
                                    
                                });
})



