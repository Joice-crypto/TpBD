import { FastifyInstance } from "fastify";
import client from "../db";
import { z } from "zod";


export async function campeonatoRoutes(app: FastifyInstance) {

  // vai pegar todos os campeonatos
  app.get("/campeonatos", async (request) => {
    const camp = await client.query(`SELECT * FROM public."CAMPEONATOS"`);
    ({
      orderBy: {
        id: "asc",
      },
    });
    const campData = camp.rows
    return campData;
   
  });


  // vai inserir um campeonato
  app.post("/campeonatos", async (request) => {
    
    const bodySchema = z.object({
      ID_camp: z.coerce.number(),
      Nome: z.coerce.string(),
      Ano: z.coerce.string(),
    })

    const { ID_camp, Nome, Ano } = bodySchema.parse(request.body)

    const insertionQuery = `
    INSERT INTO public."CAMPEONATOS" ("ID_camp", "Nome", "Ano")
    VALUES ($1, $2, $3)
    RETURNING *;`;

    const values = [ID_camp, Nome, Ano];

    const result = await client.query(insertionQuery, values);

    const insertedData = result.rows

    return insertedData;
   
  });

  // vai apagar um campeonato 
  // app.delete("/campeonatos/:id", async (request, reply) => {
  //   const paramsSchema = z.object({
  //     ID_camp: z.number().nullish(),
  //   });
  
  //   try {
  //     const { ID_camp } = paramsSchema.parse(request.params);
  
  //     // Utilize parâmetros na consulta para evitar injeção de SQL
  //     await client.query(
  //       'DELETE FROM public."CAMPEONATOS" WHERE public."CAMPEONATOS"."ID_camp" = $1',
  //       [ID_camp]
  //     );
  
  //     reply.status(200).send({ message: "Registro excluído com sucesso." });
  //   } catch (error) {
  //     // Trate erros aqui, por exemplo, enviando uma resposta de erro
  //     console.error("Erro ao processar a solicitação:", error);
  //     reply.status(500).send({ error: "Erro interno do servidor" });
  //   }
  // });
  app.delete("/campeonatos/:id", async (request,reply) => {
    
    const paramsSchema = z.object({
      ID_camp: z.coerce.number().nullish(),
    })

    const { ID_camp } = paramsSchema.parse(request.params)

    await client.query(
      'DELETE FROM public."CAMPEONATOS" WHERE public."CAMPEONATOS"."ID_camp" = $1',
      [ID_camp]
    );


  })
  
}
