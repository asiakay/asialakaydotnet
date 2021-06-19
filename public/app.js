const Swal = require('sweetalert2')
const form = document.getElementById('contact-form')
const formEvent = form.addEventListener('submit', (event)=> {
    event.preventDefault()
    const name = form.getElementsByTagName('input')[0].value
    const email = form.getElementsByTagName('input')[2].value
    const telephone = form.getElementsByTagName('input')[1].value
    const message = form.getElementsByTagName('textarea')[0].value
    sendEmail(name, email, telephone, message)
})