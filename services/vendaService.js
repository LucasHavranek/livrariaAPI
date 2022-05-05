//import vendaInfoRepository from "../repositories/vendaInfoRepository.js"
import vendaRepository from "../repositories/vendaRepository.js"

async function getVendas(autor_id, livro_id, cliente_id) {
    if (autor_id) {
        return await vendaRepository.getVendasByAutorId(autor_id)
    }
    if (livro_id) {
        return await vendaRepository.getVendasByLivroId(livro_id)
    }
    if (cliente_id) {
        return await vendaRepository.getVendasByClienteId(cliente_id)
    } else {
        return await vendaRepository.getVendas()
    }
}

async function getVendasByAutorId(id) {
    return await vendaRepository.getVendasByAutorId(id)
}

async function getVendasByLivroId(id) {
    return await vendaRepository.getVendasByLivroId(id)
}

async function getVendasByClienteId(id) {
    return await vendaRepository.getVendasByClienteId(id)
}

async function getVenda(id) {
    return await vendaRepository.getVenda(id)
}

async function insertVenda(venda) {
    return await vendaRepository.insertVenda(venda)
}

async function updateVenda(venda) {
    //const comparador = vendaRepository.getVenda(venda)
    //if (comparador.nome && comparador.autor_id === venda.nome && venda.autor_id) {
    return await vendaRepository.updateVenda(venda)
        //} else {
        //    throw new Error("O nome e o autor do venda não podem ser modificados.")
        //}
}

async function deleteVenda(id) {
    const vendas = await vendaRepository.getVendasByVenda(id)
    if (vendas.length > 0) {
        throw new Error("Não é possível excluir venda com vendas cadastradas")
    } else {
        return await vendaRepository.deleteVenda(id)
    }
}

async function insertVendaInfo(vendaInfo) {
    await vendaInfoRepository.insertVendaInfo(vendaInfo)
}

async function updateVendaInfo(vendaInfo) {
    await vendaInfoRepository.updateVendaInfo(vendaInfo)
}

async function deleteVendaInfo(id) {
    await vendaInfoRepository.deleteVendaInfo(id)
}

export default {
    getVendas,
    getVenda,
    getVendasByAutorId,
    getVendasByLivroId,
    getVendasByClienteId,
    insertVenda,
    insertVendaInfo,
    updateVenda,
    deleteVenda,
    updateVendaInfo,
    deleteVendaInfo
}