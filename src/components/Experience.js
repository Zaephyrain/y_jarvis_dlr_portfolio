import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-blue-400 dark:text-green-300"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-blue-400 
            origin-top  dark:bg-green-300 dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Artiste 3D Généraliste"
              company="Agence de communication Tremplin Numérique"
              companyLink="https://tremplinnumerique.org/"
              time="2022-2025"
              address="92100 Boulogne-Billancourt, France"
              work="Conception et réalisation d’un jeu vidéo (Onyria) • Modélisation 3D • Sculpting • Texturing (réaliste et stylisé) • Optimisation et intégration d’assets sur Unreal Engine 5 • Préparation d'assets pour de l'impression 3D • Coordination d'une équipe pluridisciplinaire"
            />

            <Details
              position="Opérateur numérique multimédia"
              company="Agence de communication Tremplin Numérique"
              companyLink="https://tremplinnumerique.org/"
              time="2021-2022"
              address="92100 Boulogne-Billancourt, France"
              work="Création de visuels pour des affiches et réseaux sociaux • Conception, création et animation d'intro, outro et synthés • Réalisation de séries de photographies à thème • Peinture numérique"
            />

            <Details
              position="Chef de Rang Polyvalent"
              company="La Criée"
              companyLink="https://www.lacriee.com/"
              time="2017-2021"
              address="94550 Chevilly-Larue, France"
              work="Acceuil physique et téléphonique des clients • Prise en charge des commandes, encaissement et conseils auprès des clients • Fidélisation de la clientèle • Confection des cocktails et boissons • Service en Salle • Run"
            />

            <Details
              position="Barman - Assistant Responsable"
              company="Belle Asie - Belle Epine"
              companyLink="https://belle-epine.klepierre.fr/boutiques-restaurants/belle-asie"
              time="2015-2017"
              address="94661 Thiais, France"
              work="Préparation, mise en place et gestion du bar • Confection des cocktails, boissons et desserts • Approvisionnement des marchandises • Responsable de caisse et vérification des stocks • Formation des nouveaux arrivents"
            />

          
          
          </ul>
        </div>
        </div>
    );
};

export default Experience;
