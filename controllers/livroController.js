import livroService from "../services/livroService.js"

async function getLivros(req, res, next) {
    try {
        res.send(await livroService.getLivros(req.query.autor_id))
        logger.info("GET /livro")
    } catch (err) {
        next(err)
    }
}

async function getLivro(req, res, next) {
    try {
        res.send(await livroService.getLivro(req.params.id))
        logger.info("GET /livro:id")
    } catch (err) {
        next(err)
    }
}

async function insertLivro(req, res, next) {
    try {
        const livro = req.body
        if (!livro.nome || !livro.valor || !livro.estoque || !livro.autor_id) {
            throw new Error("Nome, valor, estoque e autor_id são obrigatórios")
        }
        res.send(await livroService.insertLivro(livro))
        logger.info(await `POST /livro - ${JSON.stringify(livro)}`)
    } catch (err) {
        next(err)
    }
}

async function updateLivro(req, res, next) {
    try {
        const livro = req.body
        if (!livro.nome || !livro.valor || !livro.estoque || !livro.livro_id || !livro.autor_id) {
            throw new Error("Nome, valor, estoque e livro_id são obrigatórios")
        }
        res.send(await livroService.updateLivro(livro))
        logger.info(await `PUT /livro - ${JSON.stringify(livro)}`)
    } catch (err) {
        next(err)
    }
}

async function deleteLivro(req, res, next) {
    try {
        const id = req.params.id
        res.send(await livroService.deleteLivro(id))
        logger.info(await `DELETE /livro - ${JSON.stringify(id)}`)
    } catch (err) {
        next(err)
    }
}

async function insertLivroInfo(req, res, next) {
    try {
        const livroInfo = req.body
        if (!livroInfo.livro_id) {
            throw new Error("O livro_id é obrigatório")
        } else {
            await livroService.insertLivroInfo(livroInfo)
            res.end()
            logger.info(`POST /livro/info - ${JSON.stringify(livroInfo)}`)
        }

    } catch (err) {
        next(err)
    }
}

async function updateLivroInfo(req, res, next) {
    try {
        const livroInfo = req.body
        if (!livroInfo.livro_id) {
            throw new Error("O livro_id é obrigatório")
        } else {
            await livroService.updateLivroInfo(livroInfo)
            res.end()
            logger.info(`PUT /livro/info - ${JSON.stringify(livroInfo)}`)
        }

    } catch (err) {
        next(err)
    }
}

async function deleteLivroInfo(req, res, next) {
    try {
        res.send(await livroService.deleteLivroInfo(parseInt(req.params.id)))
        logger.info(`DELETE /livro/info - ${JSON.stringify(req.params.id)}`)
    } catch (err) {
        next(err)
    }
}

export default {
    getLivros,
    getLivro,
    insertLivro,
    updateLivro,
    deleteLivro,
    insertLivroInfo,
    updateLivroInfo,
    deleteLivroInfo
}