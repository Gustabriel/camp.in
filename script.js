function exibir_ocultar_senha() {
    let pass = document.querySelector("#pass");
    let eye = document.querySelector("#icon-3");
    let eyeClosed = document.querySelector("#icon-4");

    // mostrar ou ocultar senha
    eye.addEventListener("click", show_pass);
    eyeClosed.addEventListener("click", show_pass);

    function show_pass(){
        if(pass.type == "password"){
            pass.type = "text";
            eyeClosed.style.display = "block";
            eye.style.display = "none";
        } else {
            pass.type = "password";
            eye.style.display = "block";
            eyeClosed.style.display = "none";
        }
    }
}
exibir_ocultar_senha();

/* --- MODAL --- */
function modal(){
    let btn_enter = document.querySelector(".btn-enter");
    let btn_close = document.querySelector(".btn-close");
    let modal = document.querySelector(".modal");

    btn_enter.addEventListener("click", show_modal);
    btn_close.addEventListener("click", close_modal);
    
    function show_modal() {
        modal.style.display = "block";
    };

    function close_modal() {
        modal.style.opacity = "0";
        modal.style.transition = "2000ms";
        setTimeout(() => {( 
            modal.style.display = "none",
            modal.style.opacity = "1"
            )}, 2000);
    };
}

function valid_form() {
let btn_enter = document.querySelector(".btn-enter");

btn_enter.addEventListener("click", valid)
        function valid() {
        let pass = document.querySelector("#pass");
        let email = document.querySelector("#email");

        if (email.value == "") {
            email.placeholder = "Email inválido/inexistente";
        } else if (pass.value == "") {
            pass.placeholder = "Senha incorreta/inexistente";
        } else if (email.value.includes("@") != true) {
            document.querySelector(".erro-email p").style.display = "block";
            console.log("sem @ parça")
        } else {
            document.querySelector(".erro-email p").style.display = "none";
            modal();
        } 
    };
}
valid_form()