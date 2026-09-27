import { db } from "./prisma/db";

async function main() {
  const author = await db.orm.public.Author.create({
    name: "Machado de Assis",
    books: (b) =>
      b.create([
        { title: "Dom Casmurro" },
        { title: "Memorias Postumas de Bras Cubas" },
      ]),
  });

  console.log("Autor criado com seus livros associados:");
  console.log(author);

  const authors = await db.orm.public.Author.include("books").all();

  console.log("\nTodos os autores cadastrados, com seus livros:");
  console.log(JSON.stringify(authors, null, 2));
}

main().catch((e) => {
  console.error("Erro ao executar o script:", e);
  process.exit(1);
});
