const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/sauce");
const auth = require("../middleware/auth");

router.get("/", auth, userCtrl.getSauce);
router.get("/:id", auth, userCtrl.getOneSauce);
router.post("/", auth, userCtrl.createSauce);
router.put("/:id", auth, userCtrl.modifySauce);
router.delete("/:id", auth, userCtrl.deleteSauce);

module.exports = router;
