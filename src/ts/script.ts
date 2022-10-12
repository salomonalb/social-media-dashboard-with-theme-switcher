const body =  document.body;
const toggle = document.getElementById('toggle') as HTMLInputElement;
const ball = document.getElementById('ball') as HTMLElement;
const container = document.getElementById('container') as HTMLElement;

/* Checking if the body has a data-theme of dark, if it does, it will set it to light, if it does not,
it will set it to dark. */
container.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === "dark") {
        body.setAttribute('data-theme', "light")
    } else {
        body.setAttribute('data-theme', 'dark')
    }
})

/* Checking if the toggle is checked, if it is, it will set it to false, if it is not, it will set it
to true. */
ball.addEventListener('click', () => {
    if (toggle.checked) {
        toggle.checked = false;
    } else {
        toggle.checked = true;
    }
})

