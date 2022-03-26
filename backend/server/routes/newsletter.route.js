const NewsletterController = require('../controllers/newsletter.controller');

module.exports = app => {
    app.get('/api/newsletters', NewsletterController.findAllNewsletter);
    app.get('/api/newsletter/:id', NewsletterController.singleNewsletter);
    app.post('/api/create/newsletter', NewsletterController.createNewNewsletter);
    app.delete('/api/delete/newsletter/:id', NewsletterController.deleteNewsletter);
    app.patch('/api/update/newsletter/:id', NewsletterController.editNewsletter)
}