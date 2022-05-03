import express from 'express'
import autorController from '../controllers/autorController.js'

const router = express.Router()
router.get('/', autorController.getAutores)
router.get('/:id', autorController.getAutor)
router.post('/', autorController.insertAutor)
router.put('/', autorController.updateAutor)
router.delete('/:id', autorController.deleteAutor)

export default router