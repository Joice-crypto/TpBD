'use client'
import { api } from "@/lib/api";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'


dayjs.locale(ptBR);

export async function GetPartida() {

    const params = useParams();
    const parametro = params.partida;

    const response = await api.get(`/estatisticasPart/${parametro}`);
  
    const estatisticas = response.data;
    console.log(response.data)
  
   
    return (
    
    <><div className="justify-items-center ">
            <table className="table-auto ml-32  border border-slate-500 ">
                <thead>
                    <tr>
                    <th className="border border-slate-600">Time</th>
                    <th className="border border-slate-600">Imagem</th>
                        <th className="border border-slate-600">Desarmes</th>
                        <th className="border border-slate-600">Passes Errados</th>
                        <th className="border border-slate-600">Faltas</th>
                        <th className="border border-slate-600">Defesa Total</th>
                        <th className="border border-slate-600">Passes Totais</th>

                    </tr>
                    

                </thead>
                {estatisticas.map(
                    (est: {
                        ID_time: any;
                        ID_part: any;
                        Nome: any;
                        Sigla: any;
                        Faltas: any;
                        Def_total: any;
                        Imagem_brasao:any
                        Def_desarmes: any;
                        Pas_percent_erros: any;
                        Pas_errados: any;
                        Pas_total: any;
                        Atq_finalizacoes: any;
                        Atq_trave: any;
                        Atq_gols_bloq: any;
                        Atq_penaltis: any;
                        Atq_escanteios: any;
                        Atq_impedimentos: any;
                    }) => {
                        return (
                            <tbody key={est.ID_part}>
                                
                                <tr>
                                    <td className="border border-slate-600">{est.Sigla}</td>
                                    <td className="border border-slate-600">{est.Imagem_brasao}</td>
                                    <td className="border border-slate-600">{est.Def_desarmes}</td>
                                    <td className="border border-slate-600" >{est.Pas_errados}</td>
                                    <td className="border border-slate-600" >{est.Faltas}</td>
                                    <td className="border border-slate-600" >{est.Def_total}</td>
                                    <td className="border border-slate-600" >{est.Pas_total}</td>
                                </tr>
                                
                            </tbody>
                        );
                    }
                )}

            </table>
        </div></>  
  );
    
}



