import express from 'express'
import createController from '../../account/createController.js'
import getByIdController from '../../account/getByIdController.js'
import listController from '../../account/listController.js'
import updateController from '../../account/updateController.js'
import removeController from '../../account/removeController.js'

const router = express.Router()

router.post('/', createController)
router.get('/list', listController)
router.get('/:id', getByIdController)
router.put('/:id', updateController)
router.delete('/:id', removeController)

export default router