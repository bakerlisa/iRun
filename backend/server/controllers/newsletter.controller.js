const Newsletter = require('../models/newsletter.model');

// FIND
module.exports.findAllNewsletter = (req, res) => {
    Newsletter.find()
        .then(allDaNewsletters => res.json({ newsletters: allDaNewsletters }))
        .catch(err => res.status(400).json({ message: 'Something went wrong finding all Newsletter', error: err }));
}

module.exports.singleNewsletter = (req,res) => {
    Newsletter.findOne({_id: req.params.id})
    .then(singleNewsletterInfo => res.json({ newsletter: singleNewsletterInfo}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when getting single Newsletter', error: err }));
}

module.exports.editNewsletter = (req,res) => {
    Newsletter.findOneAndUpdate({_id: req.params.id},
        req.body,
        { new: true, runValidators: true })
    .then(updateNewsletter=> res.json({ updatedNewsletter: updateNewsletter }))
    .catch(err => res.status(400).json({ message: 'Something went wrong when getting single Newsletter', error: err }));
}

// CREATE
module.exports.createNewNewsletter = (req,res) => {
    Newsletter.create(req.body)
    .then(newNewsletter => res.json({ createdNewNewsletter: newNewsletter }))
    .catch(err => res.status(400).json({ message: 'Something went wrong creating new Newsletter', error: err }));
}

// DELETE
module.exports.deleteNewsletter = (req,res) => {
    Newsletter.deleteMany({_id: req.params.id})
    .then(result => res.json({ result: result}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when deleting Newsletter', error: err }));
}
