const User = require('../models/user.model');

exports.find = function (req, res) {
    User.find(function (err, users) {
        if (err) return next(err);
        users = users.map((user)=>{
            return user.toObject({ versionKey: false })
        })
        res.send(users);
    })
};

exports.findOne = function (req, res) {
    User.findById(req.params.id,function (err, user) {
        if (err) return next(err);
        if (!user) res.code(404).send("User not found")
        res.send(user.toObject({ versionKey: false }));
    })
};

exports.create = function (req, res) {
    let user = new User(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            password:req.body.password,
            email:req.body.email
        }
    );
    user.save(user,function (err) {
        if (err) {
            console.log(err)
            res.code(500).send(err)
        }
        res.send('User created')
    })
};

exports.update = function (req, res) {
    let user = {}
    let atrs = ["nombre","apellido","email","password"]
    atrs.forEach(element => {
        if (req.body[element]) user[element] = req.body[element]
    });
    User.findByIdAndUpdate(req.params.id,user,function (err) {
        if (err) {
            console.log(err)
            res.code(500).send(err)
        }
        res.send('User updated')
    })
};

exports.delete = function(req,res){
    User.findByIdAndRemove(req.params.id,function (err) {
        if (err) {
            console.log(err)
            res.code(500).send(err)
        }
        res.send('User deleted')
    })
}