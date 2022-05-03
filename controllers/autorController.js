import autorService from "../services/autorService.js"

async function getAutores(req, res, next) {
    try {
        res.send(await autorService.getAutores())
        logger.info("GET /autor")
    } catch (err) {
        next(err)
    }
}

async function getAutor(req, res, next) {
    try {
        res.send(await autorService.getAutor(req.params.id))
        logger.info("GET /autor:id")
    } catch (err) {
        next(err)
    }
}

async function insertAutor(req, res, next) {
    try {
        const autor = req.body
        if (!autor.nome || !autor.email || !autor.telefone) {
            throw new Error("Nome, email, e telefone são obrigatórios")
        }
        res.send(await autorService.insertAutor(autor))
        logger.info(await `POST /autor - ${JSON.stringify(autor)}`)
    } catch (err) {
        next(err)
    }
}

async function updateAutor(req, res, next) {
    try {
        const autor = req.body
        if (!autor.nome || !autor.email || !autor.telefone || !autor.autor_id) {
            throw new Error("Nome, email, telefone e autor_id são obrigatórios")
        }
        res.send(await autorService.updateAutor(autor))
        logger.info(await `PUT /autor - ${JSON.stringify(autor)}`)
    } catch (err) {
        next(err)
    }
}

async function deleteAutor(req, res, next) {
    try {
        const id = req.params.id
        res.send(await autorService.deleteAutor(id))
        logger.info(await `DELETE /autor - ${JSON.stringify(id)}`)
    } catch (err) {
        next(err)
    }
}

export default {
    getAutores,
    getAutor,
    insertAutor,
    updateAutor,
    deleteAutor,
}