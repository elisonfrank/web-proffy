import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";


function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      setTotalConnections(response.data.total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"></img>
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img src={landingImg} alt="Landing" className="hero-image"></img>
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="study" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="give" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões realizadas
          <img src={purpleHeartIcon} alt="coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
