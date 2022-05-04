import { connectDatabase } from './databasePostgre.js'

async function getLivros() {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT * from livros')
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getLivrosByAutorId(autor_id) {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT * from livros WHERE autor_id = $1', [autor_id])
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getLivro(id) {
    const conn = await connectDatabase()
    try {
        const sql = 'SELECT * from livros where livro_id = $1'
        const values = [id]
        const response = await conn.query(sql, values)
        return response.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function insertLivro(livro) {
    const conn = await connectDatabase()
    try {
        const sql = 'INSERT INTO livros (nome, valor, estoque, autor_id) VALUES ($1, $2, $3, $4) RETURNING *'
        const values = [livro.nome, livro.valor, livro.estoque, livro.autor_id]
        const response = await conn.query(sql, values)
        return response.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function updateLivro(livro) {
    const conn = await connectDatabase()
    try {
        const sql = 'UPDATE livros SET valor = $1, estoque = $2 WHERE livro_id = $3 RETURNING *'
        const values = [livro.valor, livro.estoque, livro.livro_id]
        const response = await conn.query(sql, values)
        return response.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getVendasByLivro(id) {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT * FROM vendas WHERE livro_id = $1', [id])
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function deleteLivro(id) {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('DELETE FROM livros WHERE livro_id = $1', [id])
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

export default {
    getLivros,
    getLivro,
    insertLivro,
    updateLivro,
    deleteLivro,
    getVendasByLivro,
    getLivrosByAutorId
}