import express from 'express'
import clienteController from '../controllers/clienteController.js'

const router = express.Router()
router.get('/', clienteController.getClientes)
router.get('/:id', clienteController.getCliente)
router.post('/', clienteController.insertCliente)
router.put('/', clienteController.updateCliente)
router.delete('/:id', clienteController.deleteCliente)

export default router