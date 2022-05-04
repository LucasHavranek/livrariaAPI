import livroInfoRepository from "../repositories/livroInfoRepository.js"
import livroRepository from "../repositories/livroRepository.js"

async function getLivros(autor_id) {
    if (autor_id) {
        return await livroRepository.getLivrosByAutorId(autor_id)
    } else {
        return await livroRepository.getLivros()
    }
}

async function getLivro(id) {
    return await livroRepository.getLivro(id)
}

async function insertLivro(livro) {
    return await livroRepository.insertLivro(livro)
}

async function updateLivro(livro) {
    //const comparador = livroRepository.getLivro(livro)
    //if (comparador.nome && comparador.autor_id === livro.nome && livro.autor_id) {
    return await livroRepository.updateLivro(livro)
        //} else {
        //    throw new Error("O nome e o autor do livro não podem ser modificados.")
        //}
}

async function deleteLivro(id) {
    const vendas = await livroRepository.getVendasByLivro(id)
    if (vendas.length > 0) {
        throw new Error("Não é possível excluir livro com vendas cadastradas")
    } else {
        return await livroRepository.deleteLivro(id)
    }
}

async function insertLivroInfo(livroInfo) {
    await livroInfoRepository.insertLivroInfo(livroInfo)
}

async function updateLivroInfo(livroInfo) {
    await livroInfoRepository.updateLivroInfo(livroInfo)
}

async function deleteLivroInfo(id) {
    await livroInfoRepository.deleteLivroInfo(id)
}

export default {
    getLivros,
    getLivro,
    insertLivro,
    insertLivroInfo,
    updateLivro,
    deleteLivro,
    updateLivroInfo,
    deleteLivroInfo
}