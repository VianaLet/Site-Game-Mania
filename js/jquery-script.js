//efeito de esconder formulário de cadastro

$(document).ready(function() {
// equivalente a document.getElementById('botão-cadastrar).click()
        $("#botao-cadastrar").click(function(){
            
            $("#form-cadastrar").slideToggle("slow");
            $("#section-login").slideToggle("slow");
            $("#botao-cadastrar").hide();
        });
        

});