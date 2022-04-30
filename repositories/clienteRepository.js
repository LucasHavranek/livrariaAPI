import { connectDatabase } from './databasePostgre.js'

async function getClientes() {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT cliente_id, nome, email, telefone, endereco from clientes')
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getCliente(id) {
    const conn = await connectDatabase()
    try {
        const sql = 'SELECT cliente_id, nome, email, telefone, endereco from clientes where cliente_id = $1'
        const values = [id]
        const response = await conn.query(sql, values)
        return response.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function insertCliente(cliente) {
    const conn = await connectDatabase()
    try {
        const sql = 'INSERT INTO clientes (nome, email, senha, telefone, endereco) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        const values = [cliente.nome, cliente.email, cliente.senha, cliente.telefone, cliente.endereco]
        const response = await conn.query(sql, values)
        return response.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function updateCliente(cliente) {
    const conn = await connectDatabase()
    try {
        const sql = 'UPDATE clientes SET nome = $1, email = $2, senha = $3, telefone = $4, endereco = $5 WHERE cliente_id = $6 RETURNING *'
        const values = [cliente.nome, cliente.email, cliente.senha, cliente.telefone, cliente.endereco, cliente.cliente_id]
        const response = await conn.query(sql, values)
        return response.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function deleteCliente(id) {
    const conn = await connectDatabase()
    try {
        const sql = 'DELETE FROM clientes WHERE cliente_id = $1'
        const values = [id]
        const response = await conn.query(sql, values)
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

export default {
    getClientes,
    getCliente,
    insertCliente,
    updateCliente,
    deleteCliente,
}