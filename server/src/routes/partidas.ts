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
      id: z.string().uuid(),
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
  app.get("/estatisticasPart/:id", async (request) => {

    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const estatis = await client.query(` SELECT *
    FROM public."PARTIDAS" INNER JOIN public."ESTATISTICAS_PARTIDAS"
    WHERE public."PARTIDAS".ID_part = ${id} `); // não consigo fazer esta consulta
    
    const estatisticaData = estatis.rows
    return estatisticaData;
   
  });


 


  
}