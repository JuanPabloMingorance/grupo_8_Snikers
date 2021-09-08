const express = require('express');
const router = express.Router();
const {add,store,detail,edit,update,destroy} = require('../controllers/productsController');
const upload = require('../middlewares/imageProducts')
router.get('/add',add);
router.post('/add',upload.single('imagen'),store);

router.get('/detail/:id',detail);

router.get('/edit/:id',edit);
router.put('/edit/:id',update);

router.delete('/delete/:id',destroy);



module.exports = router;