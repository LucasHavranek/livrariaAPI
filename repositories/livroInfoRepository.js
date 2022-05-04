import { getClient } from "./databaseMongo.js";

async function insertLivroInfo(livroInfo) {
    const client = getClient()
    try {
        await client.connect()
        await client.db("livroInfo").collection("livroInfo").insertOne(livroInfo)
    } catch (err) {
        throw err
    } finally {
        await client.close
    }
}

async function updateLivroInfo(livroInfo) {
    const client = getClient()
    try {
        await client.connect()
        await client.db("livroInfo").collection("livroInfo").updateOne({
            livro_id: livroInfo.livro_id
        }, {
            $set: {...livroInfo }
        })
    } catch (err) {
        throw err
    } finally {
        await client.close
    }
}

//Necessário corrigir, API responde porém não exclui registro.
async function deleteLivroInfo(id) {
    const client = getClient()
    try {
        await client.connect()
        return client.db("livroInfo").collection("livroInfo").deleteOne({ id })
    } catch (err) {
        throw err
    } finally {
        await client.close
    }
}

export default { insertLivroInfo, updateLivroInfo, deleteLivroInfo }