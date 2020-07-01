import React from "react";
import TableAbor from "./tableAbortion";

import HeaderLogin from "../../../../HeaderLogin";
import NavbarLogin from "../../../../Navbar";

import "./../CowStyle.css";

//import { Next } from "react-bootstrap/PageItem";

export default function Abortion() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow posi">
        <NavbarLogin />
      </div>
      <TableAbor />
    </div>
  );
}
/*
 https://mdbootstrap.com/docs/react/tables/datatables/

//npm install  mdbreact
//น่าจะเอาไว้รับผลมั้ง <Result> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</Result>
 */
