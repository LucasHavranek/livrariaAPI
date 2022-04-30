import clienteService from "../services/clienteService.js"

async function getClientes(req, res, next) {
    try {
        res.send(await clienteService.getClientes())
        logger.info("GET /cliente")
    } catch (err) {
        next(err)
    }
}

async function getCliente(req, res, next) {
    try {
        res.send(await clienteService.getCliente(req.params.id))
        logger.info("GET /cliente:id")
    } catch (err) {
        next(err)
    }
}

async function insertCliente(req, res, next) {
    try {
        const cliente = req.body
        if (!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco) {
            throw new Error("Nome, email, senha, telefone e endereço são obrigatórios")
        }
        res.send(await clienteService.insertCliente(cliente))
        logger.info(await `POST /cliente - ${JSON.stringify(cliente)}`)
    } catch (err) {
        next(err)
    }
}

async function updateCliente(req, res, next) {
    try {
        const cliente = req.body
        if (!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco || !cliente.cliente_id) {
            throw new Error("Nome, email, senha, telefone, endereço e cliente_id são obrigatórios")
        }
        res.send(await clienteService.updateCliente(cliente))
        logger.info(await `PUT /cliente - ${JSON.stringify(cliente)}`)
    } catch (err) {
        next(err)
    }
}

async function deleteCliente(req, res, next) {
    try {
        const id = req.params.id
        res.send(await clienteService.deleteCliente(id))
        logger.info(await `DELETE /cliente - ${JSON.stringify(id)}`)
    } catch (err) {
        next(err)
    }
}

export default {
    getClientes,
    getCliente,
    insertCliente,
    updateCliente,
    deleteCliente,
}