import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/67019106?s=460&u=13a19994242eb3b6ab5f85bfc59b97ce8a9ddb28&v=4"
          alt="Elison Frankowski"
        />
        <div>
          <strong>Elison Frankowski</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        blabla bla blabl ablblab labla blab la lablb lab lab lbalb al blab l
        <br />
        <br />
        blabla bla blabl ablblab labla blab la lablb lab lab lbalb al blab
        lblabla bla blabl ablblab labla blab la lablb lab lab lbalb al blab l
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
