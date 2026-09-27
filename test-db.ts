import { db } from './src/prisma/db';

async function main() {
  // Cria um novo usuário
  const user = await db.orm.public.User.create({
    email: `teste${Date.now()}@exemplo.com`,
    name: 'Usuário de Teste',
  });

  console.log('Usuário criado:', user);

  // Lista todos os usuários
  const users = await db.orm.public.User.all();
  console.log('Todos os usuários:', users);
}

main()
  .catch((e) => {
    console.error('Erro:', e);
    process.exit(1);
  });
