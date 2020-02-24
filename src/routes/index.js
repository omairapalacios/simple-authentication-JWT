const {Router} = require('express');// requiero objeto

const router = Router();

const User = require('../models/user');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hello word'))

router.post('/signup', async (req, res) => {
  const {user, password} = req.body;
  const newUser = new User({user, password});
  console.log(newUser);
  await newUser.save();

const token = jwt.sign({id: newUser._id}, 'secretkey') // argumentos => payload : dato a guardar, secret : palabra secreta: y opciones 
res.status(200).json(token);

});

router.post('/signin',async (req, res) => {
  const {user, password} = req.body;
  const findUser = await User.findOne({user});
  if (!findUser) return res.status(401).send("user doesn't exists");
  if (findUser.password !== password) return res.status(401).send('wrong password')

  const token = jwt.sign({_id: user._id}, 'secretkey');
  return res.status(200).json({token});

});

module.exports = router