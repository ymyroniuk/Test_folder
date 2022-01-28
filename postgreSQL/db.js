const Pool = require('pg').Pool
const pool = new Pool({
    user: 'ymyroniuk',
    password: '',
    host: 'localhost',
    port: '5432',
    database: 'node_postgres'
})

module.exports = pool


// Это подзапрос

// SELECT company_name, contact_name
// FROM customers
// WHERE EXISTS (SELECT customer_id FROM orders
//               WHERE customer_id = customers.customers_id
//               AND freight BETWEEN 50 AND 100)

