import { response } from 'express'
import { connectDatabase } from './databasePostgre.js'

async function getAutores() {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT autor_id, nome, email, telefone from autores')
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getAutor(id) {
    const conn = await connectDatabase()
    try {
        const sql = 'SELECT autor_id, nome, email, telefone from autores where autor_id = $1'
        const values = [id]
        const response = await conn.query(sql, values)
        return response.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function insertAutor(autor) {
    const conn = await connectDatabase()
    try {
        const sql = 'INSERT INTO autores (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *'
        const values = [autor.nome, autor.email, autor.telefone]
        const response = await conn.query(sql, values)
        return response.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function updateAutor(autor) {
    const conn = await connectDatabase()
    try {
        const sql = 'UPDATE autores SET nome = $1, email = $2, telefone = $3 WHERE autor_id = $4 RETURNING *'
        const values = [autor.nome, autor.email, autor.telefone, autor.autor_id]
        const response = await conn.query(sql, values)
        return response.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getLivrosByAutor(id) {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT * FROM livros WHERE autor_id = $1', [id])
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function deleteAutor(id) {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('DELETE FROM autores WHERE autor_id = $1', [id])
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

export default {
    getAutores,
    getAutor,
    insertAutor,
    updateAutor,
    deleteAutor,
    getLivrosByAutor
}