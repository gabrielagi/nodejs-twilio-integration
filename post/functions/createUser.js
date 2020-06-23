const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = function(req, res) {
    const { email, phoneNumber, password, displayName } = req.body;
    //validar campos necesarios
    if (!email) return res.status(404).send({ err: 'no se ha enviado un email' });
    if (!phoneNumber) return res.status(404).send({ err: 'no se ha enviado un telefono' });
    if (!password) return res.status(404).send({ err: 'no se ha enviado un contrasena' });
    if (!displayName) return res.status(404).send({ err: 'no se ha enviado un nombre' });
    //crear el usuario si todo es correcto

    //devolver valores que se creo

    admin.auth().createUser({
        email,
        phoneNumber,
        password,
        displayName,
        photoURL: 'http://www.example.com/12345678/photo.png',
        disabled: false
      })
        .then((user) => {
            const code = Math.floor(Math.random() * 9999);
            return twilio.messages
            .create({
               body: 'Your code is ' + code,
               from: '+15017122661',
               to: '+542214763536',
             })
             .then(message => res.status(200).send(user));
        })
        .catch((error) => res.status(501).send({ err: 'algo salio mal', error }));
}