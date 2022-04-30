import clienteRepository from "../repositories/clienteRepository.js"

async function getClientes() {
    return await clienteRepository.getClientes()
}

async function getCliente(id) {
    return await clienteRepository.getCliente(id)
}

async function insertCliente(cliente) {
    return await clienteRepository.insertCliente(cliente)
}

async function updateCliente(cliente) {
    return await clienteRepository.updateCliente(cliente)
}

async function deleteCliente(id) {
    return await clienteRepository.deleteCliente(id)
}

export default {
    getClientes,
    getCliente,
    insertCliente,
    updateCliente,
    deleteCliente,
}