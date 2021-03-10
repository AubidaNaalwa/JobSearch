var express = require('express');
const Job = require('../models/Jobs');
const Contact = require('../models/Contacts');
const User = require('../models/User');
var router = express.Router();

router.post('/Jobs', async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            res.status(402).send("Singing Error")
            return
        }
        const data = await User.find({ email: req.body.email, password: req.body.password }).populate('jobs')
        res.status(200).send({ Jobs: data[0].jobs})
    } catch (error) {
        res.status(403).send(error)
    }
})

router.post('/newjob', (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.Job) {
        res.status(404).send("Singing Error")
        return
    }
    const job = new Job({ title: req.body.Job.title, Answer: req.body.Job.Answer, description: req.body.Job.description })

    User.findOneAndUpdate(
        { email: req.body.email, password: req.body.password },
        {
            $push: { jobs: job }
        },
        function (error, success) {
            if (error) {
                res.status(403).send(error)
            } else {
                res.status(200).send("Done")
                job.save()
            }
        })

})




module.exports = router;