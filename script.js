let areaAprovados = document.querySelector('.aprovados-area')
let areaReprovados = document.querySelector('.reprovados-area')
let aprovados = document.querySelector('.aprovados')
let reprovados = document.querySelector('.reprovados')
let campoNome = document.querySelector('.campoNome')
let campoNota1 = document.querySelector('.campoNotaUm')
let campoNota2 = document.querySelector('.CampoNotaDois')
let enviarBtn = document.querySelector('.enviar')
enviarBtn.disabled = true
let inputs = [campoNome, campoNota1, campoNota2]
for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('input', function(){
        if(campoNome.value != '' && campoNota1.value != '' && campoNota2.value != ''){
            enviarBtn.disabled = false
        }
    })
}
function cadastrarAluno(nome, n1, n2){
    if(nome == '' || n1 == '' || n2 == ''){
        aprovados.innerHTML = "valores inválidos. Tente novamente!"
        setTimeout(limpar, 2000)
        }else{
        notaUm = parseFloat(n1)
        notaDois = parseFloat(n2)
        med = (notaUm + notaDois) / 2
        if(med >= 6){
            areaAprovados.style.display = 'block'
            aprovados.innerHTML += `<p>${nome} foi aprovado!!!. A média foi ${med}</p><br><hr>`
        }else{
            areaReprovados.style.display = 'block'
            reprovados.innerHTML += `<p>${nome} foi reprovado. A média foi ${med}</p><br><hr>`
        }
        campoNome.value = ""
        campoNota1.value = ""
        campoNota2.value = ""
    }
}
function limpar(){
    aprovados.innerHTML = ""
    reprovados.innerHTML = ""
    areaReprovados.style.display = 'none'
    areaAprovados.style.display = 'none'
}
