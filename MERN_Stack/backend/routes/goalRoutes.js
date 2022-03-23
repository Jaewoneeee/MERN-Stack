const express = require('express')
const router = express.Router()
const { getGoal, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

router.route('/').get(getGoal).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

//==============================
// router.get('/', getGoal)

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)


//==============================
// router.get('/', (req, res) => {
//     res.status(200).json({message : 'Get goal'})    // json형식으로 이렇게 가져올 수 있다 
// })                                                  // 이 Api의 목표는 프론트에서 저 주소를 쳤을때 아래 내용이 나오게 하는것

// router.post('/', (req, res) => {
//     res.status(200).json({message : 'Set goal'})
// })

// router.put('/:id', (req, res) => {
//     res.status(200).json({message : `Update goal ${req.params.id}`})
// })

// router.delete('/:id', (req, res) => {
//     res.status(200).json({message : `Delete goal ${req.params.id}`})
// })


module.exports = router