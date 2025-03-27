import postgres from 'postgres';

export async function getTerms() {
  const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });
  const response = await sql`SELECT * FROM "Terms"`;
  return response;
}

export async function getClasses() {
    const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });
    const response = await sql`SELECT * FROM "Classes"`;
    return response;
  }