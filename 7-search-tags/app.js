var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnRemoveAll = document.querySelector('.remove-all')

let tags = ['Nodejs', 'Reactjs']

function render() {
  content.innerHTML = ''
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i]
    content.innerHTML += `
    <li>${tag}
    <i class="fas fa-times" onClick="removeTag(${i})"></i>
    </li>
    `
  }
  content.appendChild(input)
  input.focus()
}

function addTag() {
  console.log('123')
}

function removeTag(index) {
  tags.splice(index, 1)
  render()
}

render()

input.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    if (input.value.trim() !== '') {
      tags.push(input.value.trim())
      render()
      input.value = ''
    }
  }
})

btnRemoveAll.addEventListener('click', function () {
  tags = []
  render()
})
