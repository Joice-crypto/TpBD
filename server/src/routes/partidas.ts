
import { FastifyInstance } from "fastify";
import client from "../db";
import { z } from "zod";


export async function partidasRoutes(app: FastifyInstance) {

  // vai pegar todas as partidas
  app.get("/partidas", async (request) => {
    const part = await client.query(`SELECT * FROM public."PARTIDAS"`);
    ({
      orderBy: {
        id: "asc",
      },
    });
    const partData = part.rows
    return partData;
   
  });

  // vai pegar uma partida espeficia
  app.get("/partida/:id", async (request) => {

    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const part = await client.query(`SELECT * FROM public."PARTIDAS"  WHERE id = ${id} `); // não consigo fazer esta consulta
    ({
      orderBy: {
        id: "asc",
      },
    });
    const partData = part.rows
    return partData;
   
  });

  // vai pegar as estatisticas de uma partida especifica 
  app.get("/estatisticasPart/:id", async (request,response) => {
    const paramsSchema = z.object({
      id: z.string(),
    });
  
    try {
      const { id } = paramsSchema.parse(request.params);
  
      const estatis = await client.query(
        `
        SELECT *
        FROM public."PARTIDAS"
        INNER JOIN public."ESTATISTICAS_PARTIDAS" ON public."PARTIDAS"."ID_part" = public."ESTATISTICAS_PARTIDAS"."ID_part"
        INNER JOIN public."TIMES" ON public."ESTATISTICAS_PARTIDAS"."ID_time" = public."TIMES"."ID_time"
        WHERE public."PARTIDAS"."ID_part" = $1
        `,
        [id]
      );
  
      const estatisticaData = estatis.rows;
      return estatisticaData;
    } catch (error) {
      console.error("Erro ao processar a requisição:", error);
      // Lide com o erro aqui, por exemplo, retornando um código de status 500
      return response.status(500).send("Erro interno do servidor");
    }
  });

 


  
}