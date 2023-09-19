const button = document.getElementById('msg')

function onSubmit(e){
  e.preventDefault()
  alert("Submit")
}
button.addEventListener('submit', onSubmit)