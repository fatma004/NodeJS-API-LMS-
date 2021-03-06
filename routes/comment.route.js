const CommentController  = require('../controllers/comment.controller');

module.exports = (app) =>{
  app.get('/api/comment',
    CommentController.all);

  app.post('/api/comment',
    CommentController.create);

  app.put('/api/comment/:id',
   CommentController.edit);

  app.delete('/api/comment/:id',
   CommentController.delete);

  app.get('/api/comment/:id',
   CommentController.findById)
}