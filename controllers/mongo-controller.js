const mongojs = require("mongojs");

const databaseURL = "notetaker_db";
const collections = ["notes"];

const db = mongojs(databaseURL, collections);

db.on("error", (err) => console.log({ error_message: err }));

module.exports = {
  getNotes: (req, res) =>
    db.notes.find({}, (err, data) => (err ? res.send(err) : res.send(data))),

  getNote: (req, res) => {
    db.notes.find({ _id: mongojs.ObjectID(req.params.id) }, (err, data) => {
      err ? res.send(err) : res.send(data);
    });
  },

  addNote: (req, res) =>
    db.notes.insert(
      {
        text: req.body.text,
        completed: req.body.completed,
        tags: [],
      },
      (err, data) => (err ? res.send(err) : res.send(data))
    ),

  updateText: (req, res) => {
    db.notes.update(
      { _id: mongojs.ObjectID(req.body.Id) },
      { $set: { text: req.body.text } },
      (err, response) => (err ? res.send(err) : res.send(response))
    );
  },

  addTag: (req, res) => {
    db.notes.update(
      { _id: mongojs.ObjectID(req.body.id) },
      { $push: { tags: req.body.tag } },
      (err, response) => (err ? res.send(err) : res.send(response))
    );
  },

  addTags: (req, res) => {
    db.notes.update(
      { _id: mongojs.ObjectID(req.body.id) },
      { $push: { tags: { each: req.body.tags } } },
      (err, response) => (err ? res.send(err) : res.send(response))
    );
  },

  removeTag: (req, res) => {
    db.notes.update(
      { _id: mongojs.ObjectID(req.body.id) },
      {
        $pull: {
          tags: req.body.tags,
        },
      },
      (err, response) => (err ? res.send(err) : res.send(response))
    );
  },

  removeTags: (req, res) => {
    db.notes.update(
      { _id: mongojs.ObjectID(req.body.id) },
      {
        $pullAll: {
          tags: req.body.tags,
        },
      },
      (err, response) => (err ? res.send(err) : res.send(response))
    );
  },

  deleteNote: (req, res) => {
    db.notes.remove({ _id: mongojs.ObjectID(req.body.id) }, (err, data) =>
      err ? res.send(err) : res.send(data)
    );
  },
};
