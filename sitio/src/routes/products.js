const express = require('express');
const router = express.Router();
const {add,store,detail,edit,update,destroy} = require('../controllers/productsController');

router.get('/add',add);
router.post('/add', store);

router.get('/detail/:id',detail);

router.get('/edit/:id',edit);
router.put('/edit/:id',update);

router.delete('/delete',destroy);



module.exports = router;