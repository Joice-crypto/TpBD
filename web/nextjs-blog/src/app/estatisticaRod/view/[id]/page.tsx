import { api } from "@/lib/api";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";

dayjs.locale(ptBR);

export default async function ViewEstatistica() {
  const response = await api.get("/estatisticasPart", {
    headers: {},
  });

  const estatisticas = response.data;

  if (estatisticas.length == 0) {
    return;
  }

  return (
    <><p className="text-center text-xl m-6">Partidas</p><div className="justify-items-center ml-96">

          <table className="table-auto ml-32 border-separate border-spacing-2 border border-slate-500 ">
              <thead>
                  <tr>
                      <th className="border border-slate-600">Faltas</th>
                      <th className="border border-slate-600">Defesa Total</th>
                      
                  </tr>
                  <tr>
                  <th className="border border-slate-600">Desarmes</th>
                    <th className="border border-slate-600">Passes Errados</th>
                  </tr>
                  <tr>
                  <th className="border border-slate-600">Passes Totais</th>
                    <th className="border border-slate-600">Finalizações</th>
                  </tr>
                  <tr>
                  <th className="border border-slate-600">Ataques na trave</th>
                    <th className="border border-slate-600">Gols Bloqueados</th>
                  </tr>
                  <tr>
                  <th className="border border-slate-600">Penaltis</th>
                    <th className="border border-slate-600">Escanteios</th>
                  </tr>
                  <tr>
                  <th className="border border-slate-600">Impedimentos</th>
                    <th className="border border-slate-600">Porcentagem de erros</th>
                  </tr>
              </thead>
              {estatisticas.map(
                  (est: {
                    ID_time:any;
                    ID_part:any;
                    Faltas:any;
                    Def_total:any;
                    Def_desarmes:any;
                    Pas_percent_erros:any;
                    Pas_errados:any;
                    Pas_total:any;
                    Atq_finalizacoes:any;
                    Atq_trave:any;
                    Atq_gols_bloq:any;
                    Atq_penaltis:any;
                    Atq_escanteios:any;
                    Atq_impedimentos:any;
                  }) => {
                      return (<tbody key={est.ID_part}>
                        <tr>
                        <td>{est.Faltas}</td>
                        <td> </td>
                        </tr>
                    </tbody>

                );
            }
        )}
    </table>
</div></>
);
}