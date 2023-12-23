import insta from "../assets/icons/icons8-instagram-48.png";
import github from "../assets/icons/icons8-github-50.png";
import linkedin from "../assets/icons/icons8-linkedin-48.png";

import Image from "next/image";

export function Footer() {
  return (
    <footer className=" h-44 mt-20  bg-black ">
      <ul className="grid grid-rows-2  ml-10 grid-flow-col">
        <p className="text-white font-bold mt-7">FootebolFocus</p>
        <p className="text-white">
          Site feito para a diciplina de banco de dados 2023/2
        </p>

        
          <h2 className="text-white mt-7 ml-32 font-bold">Midias Sociais</h2>
          <div className=" grid grid-flow-col justify-start ">

            <a href="https://www.instagram.com/joice_crsilva/"><Image
              className="object-cover ml-32 "
              src={insta}
              alt=""
              width="32"
              height="40"
            /></a>

            <a href="https://www.linkedin.com/in/joice-cristina-3451851a4/"><Image
              className="object-cover mr-2 "
              src={linkedin}
              alt=""
              width="32"
              height="40"
            /></a>
           <a href="https://github.com/Joice-crypto"><Image
              className="object-cover mr-2 "
              src={github}
              alt=""
              width="32"
              height="40"
            /></a>
          </div>
        
      </ul>

      <hr className=" bg-white ml-10 mr-10" />

      <p className="text-white text-center mt-5">
        © Copyright 2024. Made by Joice Cristina
      </p>
    </footer>
  );
}
