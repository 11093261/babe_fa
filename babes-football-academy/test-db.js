const mysql = require('mysql2/promise');

async function test() {
  console.time('connect');
  try {
    const conn = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: 'FETmee1733928$',
      database: 'babes_fa',
      port: 3306,
      connectTimeout: 5000,
    });
    console.timeEnd('connect');  // should be < 100ms
    await conn.end();
  } catch (err) {
    console.timeEnd('connect');
    console.error(err);
  }
}
test();