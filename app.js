const form = document.querySelector('#form')
const campo = document.querySelector('#campo')
const resposta = document.querySelector('#resposta')

form.addEventListener('submit', function(event){
    event.preventDefault()
    const input = campo.value
    console.log(input)
    
    if ((input % 2) == 0) alert("Seu número é " + input + " e é par")
        else alert("Seu número é " + input + " e é impar")

})

    