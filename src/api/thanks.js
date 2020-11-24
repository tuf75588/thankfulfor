const express = require('express');
const Joi = require('joi');
const { nanoid } = require('nanoid');
const thanks = require('../db/thanks');
const { route } = require('.');

const router = express.Router();

const schema = Joi.object({
  name: Joi.string().min(2).max(40).required(),
  message: Joi.string().min(1).max(280).required(),
  slug: Joi.string()
    .min(2)
    .max(100)
    .pattern(
      /^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ðאבגדהוזחטיכלמנסעפצקרשת\-_]+$/u
    ),
});

router.get('/', (req, res, next) => {
  res.send('hello thanks!');
});

module.exports = router;
