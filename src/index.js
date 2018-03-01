const button = document.createELement('button')
button.innerText = 'click me'
button.onclick = () => {
    System.import('./image_viewer').then(module => {
        module.call()
    })
}

document.body.appendChild(button)