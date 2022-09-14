const student = require('./controller/student/student');
const address = require('./controller/student/address');
const router = require('express').Router();

router.post('/addstudent', student.add);
router.get('/find/:id',student.findstudent)
router.get('/findall',student.findall)
router.put('/update',student.updatestudent)
router.delete('/delete/:id',student.deletestudent)

router.post('/address',address.addr);

module.exports = router;
