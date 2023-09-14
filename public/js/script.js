// function sendMail(){
//     console.log("sending mail")
//     let params = {
//         Name:document.getElementsByName("name")[0].value,
//         email:document.getElementsByName("email")[0].value,
//         message:document.getElementsByName("message")[0].value
//     };
//     const serviceID = 'service_6rdxqpf';
//     const templateID = 'template_letru58';
//     const publicKey = '';
//     emailjs
//         .send(serviceID, templateID, params)
//         .then( (res) => {
//             document.getElementsByName("name")[0].value = "";
//             document.getElementsByName("email")[0].value = "";
//             document.getElementsByName("message")[0].value = "";
//             console.log(res)
//             alert("Your message has been sent successfully")
//         } )
//         .catch( (err) => {
//             console.log(err)
//             alert("Your message has not been sent successfully")
//         } );
// }
