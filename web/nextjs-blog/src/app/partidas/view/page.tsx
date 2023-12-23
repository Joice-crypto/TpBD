import { api } from "@/lib/api";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";

dayjs.locale(ptBR);

export default async function ViewPartidas() {
  const response = await api.get("/partidas", {
    headers: {},
  });

  const partidas = response.data;

  if (partidas.length == 0) {
    return;
  }

  return (
    <><p className="text-center text-xl m-6">Partidas</p><div className="justify-items-center ml-96">

          <table className="table-auto ml-32 border-separate border-spacing-2 border border-slate-500 ">
              <thead>
                  <tr>
                      <th className="border border-slate-600">Rodada</th>
                      <th className="border border-slate-600">Partida</th>
                      <th className="border border-slate-600">Data</th>
                      <th className="border border-slate-600">Local</th>
                  </tr>
              </thead>


              {partidas.map(
                  (part: {
                      ID_part: any;
                      ID_rod: any;
                      Data: any;
                      Estadio: any;
                  }) => {
                      return (
                          <tbody key={part.ID_part}>
                              <tr>
                              <td>{part.ID_rod}</td>
                                  <td> <a href={`http://localhost:3000/partidas/estatistica/${part.ID_part}`}>{part.ID_part}</a></td>
                                  <td> {dayjs(part.Data).format("D[/]M[/]YY")}</td>
                                  <td>{part.Estadio}</td>
                              </tr>
                          </tbody>

                      );
                  }
              )}
          </table>
      </div></>
  );
}
