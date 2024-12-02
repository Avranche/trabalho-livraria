import pool from '../config/database';

const checkTableStructure = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      DO $$ DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP TABLE IF EXISTS ' || r.tablename || ' CASCADE';
    END LOOP;
END $$;
    `;
    const result = await client.query(queryText);
    console.log('Estrutura da tabela books:', result.rows);
  } catch (err) {
    console.error('Erro ao verificar estrutura da tabela:', err);
  } finally {
    client.release();
  }
};

checkTableStructure().then(() => process.exit(0));
