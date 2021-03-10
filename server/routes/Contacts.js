var express = require('express');
const Contact = require('../models/Contacts');
const User = require('../models/User');
var router = express.Router();

router.post('/contacts', async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            res.status(402).send("Singing Error")
            return
        }
        const data = await User.find({ email: req.body.email, password: req.body.password }).populate('contacts')
        res.status(200).send({ Contact: data[0].contacts })
    } catch (error) {
        res.status(403).send(error)
    }
})

router.post('/newcontact', (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.Job) {
        res.status(404).send("Singing Error")
        return
    }
    const contact = new Contact({ name : req.body.Job.title, Answer: req.body.Job.Answer, description: req.body.Job.description })

    User.findOneAndUpdate(
        { email: req.body.email, password: req.body.password },
        {
            $push: { contacts: contact }
        },
        function (error, success) {
            if (error) {
                res.status(403).send(error)
            } else {
                res.status(200).send("Done")
                contact.save()
            }
        })

})

module.exports = router;