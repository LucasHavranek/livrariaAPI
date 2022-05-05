import express from 'express'
import vendaController from '../controllers/vendaController.js'

const router = express.Router()
router.get('/', vendaController.getVendas)
router.get('/:id', vendaController.getVenda)
router.post('/', vendaController.insertVenda)
router.put('/', vendaController.updateVenda)
router.delete('/:id', vendaController.deleteVenda)
router.post('/info', vendaController.insertVendaInfo)
router.put('/info', vendaController.updateVendaInfo)
router.delete('/info/:id', vendaController.deleteVendaInfo)


export default router