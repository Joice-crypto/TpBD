

export default function ViewCampeonatos() {
  
  return (
    <>
      <p className="text-center text-xl m-6">Administração</p>
      <div className=" justify-center ml-44 mb-10 grid grid-cols-2 gap-1">
        <div className="justify-items-center mt-16 grid grid-cols-2 gap-1 ">
          <div className="shadow-lg h-52 w-96 mt-6 bg-stone-50 ">
            <p className="text-center text-xl mt-20 text-black"> Campeonatos</p>
            <p className="text-center text-black"> </p>
            <button className="bg-green-400 h-8 rounded-full w-20 m-5 mt-8">
              <p className="text-center text-black ">
                <a href="http://localhost:3000/administrar/campeonatos/new/">
                  Inserir{" "}
                </a>
              </p>
            </button>
            <button className="bg-blue-400 h-8 rounded-full w-20 m-5 mt-8">
              <p className="text-center text-black ">
                <a href="http://localhost:3000/administrar/campeonatos/edit/">
                  Editar{" "}
                </a>
              </p>
            </button>
            <button className="bg-red-400 h-8 rounded-full w-20 m-5 mt-8">
              <p className="text-center text-black ">
                <a href="http://localhost:3000/administrar/campeonatos/delete/">
                  Apagar{" "}
                </a>
              </p>
            </button>
          </div>
        </div>

        <div className="justify-items-center mt-16 grid grid-cols-2 gap-1 ">
          <div className="shadow-lg h-52 w-96 mt-6 bg-stone-50 ">
            <p className="text-center text-xl mt-20 text-black"> Times</p>
            <p className="text-center text-black"> </p>
            <button className="bg-green-400 h-8 rounded-full w-20 m-5 mt-8">
              <p className="text-center text-black ">
                <a href="http://localhost:3000/partidas/view">Inserir </a>
              </p>
            </button>
            <button className="bg-blue-400 h-8 rounded-full w-20 m-5 mt-8">
              <p className="text-center text-black ">
                <a href="http://localhost:3000/partidas/view">Editar </a>
              </p>
            </button>
            <button className="bg-red-400 h-8 rounded-full w-20 m-5 mt-8">
              <p className="text-center text-black ">
                <a href="http://localhost:3000/partidas/view">Apagar </a>
              </p>
            </button>
          </div>
        </div>

        <div className="justify-items-center mt-16 grid grid-cols-2 gap-1 ">
          <div className="shadow-lg h-52 w-96 mt-6 bg-stone-50 ">
            <p className="text-center text-xl mt-20 text-black">
              {" "}
              Membro de Equipe{" "}
            </p>
            <p className="text-center text-black"> </p>
            <button className="bg-green-400 h-8 rounded-full w-20 m-5 mt-8">
              <p className="text-center text-black ">
                <a href="http://localhost:3000/partidas/view">Inserir </a>
              </p>
            </button>
            <button className="bg-blue-400 h-8 rounded-full w-20 m-5 mt-8">
              <p className="text-center text-black ">
                <a href="http://localhost:3000/partidas/view">Editar </a>
              </p>
            </button>
            <button className="bg-red-400 h-8 rounded-full w-20 m-5 mt-8">
              <p className="text-center text-black ">
                <a href="http://localhost:3000/partidas/view">Apagar </a>
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
