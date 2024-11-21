// const Router = require('express').Router;
// const userController = require('../controllers/user-controller')
// const { body } = require('express-validator')
// const authMiddleware = require('../middleware/auth-middleware');
// const bodyParser = require('body-parser')
// const multer = require('multer')
// const router = new Router()


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname.replace(' ', '-'))
//     }
// })


// const uploadOptions = multer({ storage: storage })

// router.post('/registration',
//     // uploadOptions.single('image'),
//     body('email').isEmail(),
//     body('password').isLength({ min: 3, max: 24 }),
//     userController.registration)
// router.post('/login', userController.login)
// router.post('/logout', userController.logout)
// router.get('/activation/:link', userController.activation)
// router.get('/refresh', userController.refresh)
// router.post('/updUser', uploadOptions.any('avatar'), userController.updUser)
// // router.get('/getMembers', authMiddleware,userController.getUsers)

// module.exports = router

const Router = require('express').Router;
const userController = require('../controllers/user-controller')
const { body } = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware');
const bodyParser = require('body-parser')
const multer = require('multer')
const router = new Router()
const companyController = require('../controllers/company-controller')
const eventController = require('../controllers/event-controller');
const tiketController = require('../controllers/tiket-controller');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.replace(' ', '-'))
    }
})


const uploadOptions = multer({ storage: storage })

router.post('/registration',
    // uploadOptions.single('image'),
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 24 }),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activation/:link', userController.activation)
router.get('/refresh', userController.refresh)
router.post('/updUser', uploadOptions.any('avatar'), userController.updUser)


router.get('/getCo/:id', companyController.getCompanies)
router.get('/getCoOne/:id/:idUs', companyController.getCompany)
router.post('/createCo', uploadOptions.any('companyImg'), companyController.createCompany)
router.delete('/deleteCo/:id', companyController.deleteCompany)
router.post('/editCo', uploadOptions.any('companyImg'), companyController.editCompany)


router.post('/createEvent', uploadOptions.any('eventImg'), eventController.createEvent)
router.get('/getEventComp/:idUs/:idCom', eventController.getEventsCom)
router.get('/getEvent/:id', eventController.getEvent)
router.get('/getAllEvent', eventController.getAllEvent)
router.post('/editEvent', uploadOptions.any('eventImg'), eventController.editEvent)
router.delete('/deleteEvent/:id', eventController.deleteEvent)
router.get('/getEventOneUs/:idUs/:idEv', eventController.getEventsOneUs)

router.post('/createTicket', tiketController.buyTicket)
router.get('/allSubscribers/:id', tiketController.allSubscribers)
router.get('/allHistoryEve/:id', tiketController.allHistoryEve)
// router.get('/getAllMembers', eventController.getAllMembers)
// router.get('/getVisibleMembers', eventController.getVisibleMembers)
// router.post('/addComents', eventController.addComents)

// router.get('/getMembers', authMiddleware,userController.getUsers)

module.exports = router