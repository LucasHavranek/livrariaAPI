import vendaService from "../services/vendaService.js"

async function getVendas(req, res, next) {
    try {
        const autor_id = req.query.autor_id
        const livro_id = req.query.livro_id
        const cliente_id = req.query.cliente_id
        res.send(await vendaService.getVendas(autor_id, livro_id, cliente_id))
        logger.info("GET /venda")
    } catch (err) {
        next(err)
    }
}

async function getVendasByAutorId(req, res, next) {
    try {
        res.send(await vendaService.getVendasByAutorId(req.query.autor_id))
        logger.info("GET /venda")
    } catch (err) {
        next(err)
    }
}

async function getVendasByLivroId(req, res, next) {
    try {
        res.send(await vendaService.getVendasByLivroId(parseInt(req.query.livro_id)))
        logger.info("GET /venda")
    } catch (err) {
        next(err)
    }
}

async function getVendasByClienteId(req, res, next) {
    try {
        res.send(await vendaService.getVendasByClienteId(req.query.cliente_id))
        logger.info("GET /venda")
    } catch (err) {
        next(err)
    }
}

async function getVenda(req, res, next) {
    try {
        res.send(await vendaService.getVenda(req.params.id))
        logger.info("GET /venda:id")
    } catch (err) {
        next(err)
    }
}

async function insertVenda(req, res, next) {
    try {
        const venda = req.body
        if (!venda.valor || !venda.data || !venda.cliente_id || !venda.livro_id) {
            throw new Error("Nome, valor, estoque e autor_id são obrigatórios")
        }
        res.send(await vendaService.insertVenda(venda))
        logger.info(await `POST /venda - ${JSON.stringify(venda)}`)
    } catch (err) {
        next(err)
    }
}

async function updateVenda(req, res, next) {
    try {
        const venda = req.body
        if (!venda.nome || !venda.valor || !venda.estoque || !venda.venda_id || !venda.autor_id) {
            throw new Error("Nome, valor, estoque e venda_id são obrigatórios")
        }
        res.send(await vendaService.updateVenda(venda))
        logger.info(await `PUT /venda - ${JSON.stringify(venda)}`)
    } catch (err) {
        next(err)
    }
}

async function deleteVenda(req, res, next) {
    try {
        const id = req.params.id
        res.send(await vendaService.deleteVenda(id))
        logger.info(await `DELETE /venda - ${JSON.stringify(id)}`)
    } catch (err) {
        next(err)
    }
}

async function insertVendaInfo(req, res, next) {
    try {
        const vendaInfo = req.body
        if (!vendaInfo.venda_id) {
            throw new Error("O venda_id é obrigatório")
        } else {
            await vendaService.insertVendaInfo(vendaInfo)
            res.end()
            logger.info(`POST /venda/info - ${JSON.stringify(vendaInfo)}`)
        }

    } catch (err) {
        next(err)
    }
}

async function updateVendaInfo(req, res, next) {
    try {
        const vendaInfo = req.body
        if (!vendaInfo.venda_id) {
            throw new Error("O venda_id é obrigatório")
        } else {
            await vendaService.updateVendaInfo(vendaInfo)
            res.end()
            logger.info(`PUT /venda/info - ${JSON.stringify(vendaInfo)}`)
        }

    } catch (err) {
        next(err)
    }
}

async function deleteVendaInfo(req, res, next) {
    try {
        res.send(await vendaService.deleteVendaInfo(parseInt(req.params.id)))
        logger.info(`DELETE /venda/info - ${JSON.stringify(req.params.id)}`)
    } catch (err) {
        next(err)
    }
}

export default {
    getVendas,
    getVenda,
    getVendasByAutorId,
    getVendasByLivroId,
    getVendasByClienteId,
    insertVenda,
    updateVenda,
    deleteVenda,
    insertVendaInfo,
    updateVendaInfo,
    deleteVendaInfo
}