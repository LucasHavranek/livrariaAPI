import { connectDatabase } from './databasePostgre.js'

async function getVendas() {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT * from vendas')
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getVendasByAutorId(id) {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('Select * from livros inner join vendas on livros.livro_id = vendas.venda_id where autor_id = $1', [id])
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getVendasByLivroId(id) {
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

async function getVendasByClienteId(id) {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT * FROM vendas WHERE cliente_id = $1', [id])
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getVenda(id) {
    const conn = await connectDatabase()
    try {
        const sql = 'SELECT * from vendas where venda_id = $1'
        const values = [id]
        const response = await conn.query(sql, values)
        return response.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function verificaEstoqueLivro(livro_id) {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT estoque FROM livros where livro_id = $1', [livro_id])
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function insertVenda(venda) {
    const conn = await connectDatabase()
    try {
        const sql = 'INSERT INTO vendas (valor, data, cliente_id, livro_id) VALUES ($1, $2, $3, $4) RETURNING *'
        const values = [venda.valor, venda.data, venda.cliente_id, venda.livro_id]
        const response = await conn.query(sql, values)
        return response.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function updateVenda(venda) {
    const conn = await connectDatabase()
    try {
        const sql = 'UPDATE vendas SET valor = $1, estoque = $2 WHERE venda_id = $3 RETURNING *'
        const values = [venda.valor, venda.estoque, venda.venda_id]
        const response = await conn.query(sql, values)
        return response.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function deleteVenda(id) {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('DELETE FROM vendas WHERE venda_id = $1', [id])
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

export default {
    getVendas,
    getVenda,
    insertVenda,
    updateVenda,
    deleteVenda,
    getVendasByAutorId,
    getVendasByLivroId,
    getVendasByClienteId,
    verificaEstoqueLivro,
}