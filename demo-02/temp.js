// const express = require('express')
// const app = express()

// app.get('/reset_password', function (req, res) {
//   const token = req.query.token
//   const email = req.query.email
//   res.send({
//     token: token,
//     email: email
//   })
// })

// app.listen(3000, () => console.log('client running on 3000'))
var toonavatar = require('cartoon-avatar');
var url = toonavatar.generate_avatar({"gender":"female"})
console.log(url)