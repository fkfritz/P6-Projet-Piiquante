const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/sauce");

router.get("/", userCtrl.getSauce);
router.get("/:id", userCtrl.getOneSauce);
router.post("/", userCtrl.createSauce);
router.put("/:id", userCtrl.modifySauce);
router.delete("/:id", userCtrl.deleteSauce);

module.exports = router;
