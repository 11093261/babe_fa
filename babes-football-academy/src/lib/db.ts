// lib/db.ts (or src/lib/db.ts)
import mysql from 'mysql2/promise';

let pool: mysql.Pool;

export function getDb() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,           // should be 127.0.0.1
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT) || 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      connectTimeout: 10000,                // 10 seconds – fail fast
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });

    // Warm up the pool – first request will be fast
    pool.getConnection()
      .then(conn => {
        console.log('✅ Database pool ready');
        conn.release();
      })
      .catch(err => {
        console.error('❌ Database pool failed:', err.message);
      });
  }
  return pool;
}