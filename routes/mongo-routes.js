const router = require("express").Router();

const {
  getNotes,
  addNote,
  getNote,
  updateText,
  addTag,
  addTags,
  removeTag,
  removeTags,
  deleteNote,
} = require("../controllers/mongo-controller");
const { route } = require("./test-routes");

router.get("/notes", getNotes);

router.get("/notes/single/:id", getNote);

router.post("/notes", addNote);

router.patch("/notes", updateText);

router.put("/notes", addTag);

router.put("/notes/multi", addTags);

router.delete("/notes/tags/single", removeTag);

router.delete("/notes/tags/multi", removeTags);

router.delete("/notes/:id", deleteNote);

module.exports = router;
