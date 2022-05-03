import autorRepository from "../repositories/autorRepository.js"

async function getAutores() {
    return await autorRepository.getAutores()
}

async function getAutor(id) {
    return await autorRepository.getAutor(id)
}

async function insertAutor(autor) {
    return await autorRepository.insertAutor(autor)
}

async function updateAutor(autor) {
    return await autorRepository.updateAutor(autor)
}

async function deleteAutor(id) {
    const livros = await autorRepository.getLivrosByAutor(id)
    if (livros.length > 0) {
        throw new Error("Não é possível excluir autor com livros de autoria cadastrados na base")
    } else {
        return await autorRepository.deleteAutor(id)
    }
}

export default {
    getAutores,
    getAutor,
    insertAutor,
    updateAutor,
    deleteAutor,
}