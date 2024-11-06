function validarFormulario(peso, altura) {
    let mensagemErro = document.getElementById("mensagem_erro");

    if (!mensagemErro) {
        mensagemErro = document.createElement("p");
        mensagemErro.id = "mensagem_erro";
        document.querySelector("#imc form").appendChild(mensagemErro);
    }

    if (peso === "" || altura === "") {
        mensagemErro.innerText = "Para que o cálculo seja realizado, é necessário que todos os campos sejam preenchidos.";
        return false;
    }

    if (isNaN(peso) || isNaN(altura)) {
        mensagemErro.innerText = "São aceitos somente valores numéricos.";
        return false;
    }

    if (peso <= 0 || altura <= 0) {
        mensagemErro.innerText = "Valores de altura e peso devem ser positivos.";
        return false;
    }

    mensagemErro.innerText = "";
    return true;
}

function calcularIMC() {
    let peso = document.getElementById("peso").value.replace(",", ".");
    let altura = document.getElementById("altura").value.replace(",", ".");

    if (!validarFormulario(peso, altura)) {
        return;
    }

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    if (altura > 3) {
        altura = altura / 100;
    }

    const imc = peso / (altura * altura);
    let status = "";

    if (imc < 18.5) {
        status = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        status = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        status = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9){
        status = "Obesidade I";
    } else if (imc >= 35 && imc < 39.9){
        status = "Obesidade II";
    } else {
        status = "Obesidade III";
    }

    document.getElementById("valor_imc").innerText = imc.toFixed(2);
    document.getElementById("status_imc").innerText = status;
}

function limparFormulario() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("valor_imc").innerText = "0";
    document.getElementById("status_imc").innerText = "0";

    let mensagemErro = document.getElementById("mensagem_erro");
    if (mensagemErro) {
        mensagemErro.innerText = "";
    }
}

document.getElementById("calcular").addEventListener("click", calcularIMC);
document.getElementById("limpar").addEventListener("click", limparFormulario);