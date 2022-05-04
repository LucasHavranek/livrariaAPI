import express from 'express'
import livroController from '../controllers/livroController.js'

const router = express.Router()
router.get('/', livroController.getLivros)
router.get('/:id', livroController.getLivro)
router.post('/', livroController.insertLivro)
router.put('/', livroController.updateLivro)
router.delete('/:id', livroController.deleteLivro)
router.post('/info', livroController.insertLivroInfo)
router.put('/info', livroController.updateLivroInfo)
router.delete('/info/:id', livroController.deleteLivroInfo)


export default router