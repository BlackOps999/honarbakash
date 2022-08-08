const express = require("express")
const router = express.Router()

router.get("/publications2", (req, res) => {
    res.send("Publication List")
    console.log("here2");
})

module.exports = router