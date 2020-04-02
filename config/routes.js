const express = require('express')
const router = express.Router()
const bookmarksController=require('../app/controllers/bookmarksController')



router.get('/bookmarks', bookmarksController.list)
router.post('/bookmarks', bookmarksController.create)
router.get('/bookmarks/tags',bookmarksController.listnames)//must be above all :id ->3rd function
router.get('/bookmarks/:id', bookmarksController.show)
router.put('/bookmarks/:id', bookmarksController.update)
router.delete('/bookmarks/:id', bookmarksController.destroy)

router.get("/:hash",bookmarksController.redirecthash)//1st function
router.get("/bookmarks/tags/:name",bookmarksController.listtag)//2nd functioncons
// router.get('/bookmarks/tags',bookmarksController.listnames)


module.exports = router