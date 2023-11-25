import { FastifyInstance } from "fastify";
import client from "../db";


export async function timesRoutes(app: FastifyInstance) {

  // vai pegar todos os times
  app.get("/times", async (request) => {
    const times = await client.query(`SELECT * FROM public."TIMES"`);
    ({
      orderBy: {
        id: "asc",
      },
    });
    return times;
  });
}
