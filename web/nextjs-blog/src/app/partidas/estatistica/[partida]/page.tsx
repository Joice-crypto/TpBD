

import { GetPartida } from "@/components/GetPartida";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";


dayjs.locale(ptBR);

export default async function ViewEstatistica() {
 
  // estou importando pois GetPartida precisa ser um componente
  return (
    <div>
      <p className="text-center text-xl m-6">Partidas</p>
      <GetPartida></GetPartida>
    </div>
    
  );
}
