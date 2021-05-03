const Course = require('../models/Course.model');

module.exports = {

  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Course.find({}).limit(limit)
    .then(courses => res.status(200).send(courses))
    .catch(next)
  },

  create(req, res, next){
    const courseProps = req.body;
    console.log(courseProps);
    Course.create(courseProps)
      .then(course =>
        res.status(201).send(course)) 
      .catch(next) 

  },

 edit(req, res, next){
    const CourseId = req.params.id;
    const courseProps = req.body;
    Course.findByIdAndUpdate({_id: courseId}, courseProps)
    .then(() => Course.findById({_id: courseId}))
    .then(course => res.status(200).send(course))
    .catch(next);
  },

  delete(req, res, next){
    const courseId = req.params.id;
    Course.findByIdAndRemove({_id: courseId})
      .then(course => res.status(204).send(course))
      .catch(next);
  }
};