import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [rutPersona, setRutPersona] = useState("");
  const [resultado, setResultado] = useState(null);
  const [registros, setRegistros] = useState([]);

  const [data, setData] = useState({
    rut_devolucion: "13500986",
    periodo: "202109",
    apellido_paterno: "ARREDONDO",
    pk_dpe: "4676603d-7523-4988-92d7-f704b43f0864",
    mto_devo_anteriores_pesos: "0",
    "e-mail": "",
    remuneracion: "",
    apellido_materno: "RAM�REZ",
    dv: "5",
    tipo_devolucion: "REAJUSTE",
    tope_cotizacion: "",
    nombre_devolucion: "V�CTOR ALEJANDRO",
    tope_renta: "",
    telefono: "",
    mto_devo_en_proceso_pesos: "766",
    total_cotizacion_pagada: "",
    region: "6",
  });

  const consultarRut = async () => {
    const data = {
      rut: rutPersona,
    };
    const url =
      "https://q3xwbxx9hj.execute-api.us-east-1.amazonaws.com/default/dpe_buscar_resultado";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultado = await response.json();
    setResultado(resultado);
    setRegistros(resultado.registros);
  };

  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={rutPersona}
          onChange={(e) => setRutPersona(e.target.value)}
        />
        <button type="button" onClick={consultarRut}>
          Consultar
        </button>
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Rut</th>
            <th>DV</th>
            <th>Periodo</th>
            <th>Remuneracion</th>
            <th>Total Cotizacion Pagada</th>
            <th>Tope Cotizacion</th>
            <th>Tope Renta</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Region</th>
            <th>Mto Devo Anteriores Pesos</th>
            <th>Mto Devo En Proceso Pesos</th>
            <th>Tipo Devolucion</th>
            <th>Pk Dpe</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro) => (
            <tr>
              <td>{registro.nombre_devolucion}</td>
              <td>{registro.apellido_paterno}</td>
              <td>{registro.apellido_materno}</td>
              <td>{registro.rut_devolucion}</td>
              <td>{registro.dv}</td>
              <td>{registro.periodo}</td>
              <td>{registro.remuneracion}</td>
              <td>{registro.total_cotizacion_pagada}</td>
              <td>{registro.tope_cotizacion}</td>
              <td>{registro.tope_renta}</td>
              <td>{registro.telefono}</td>
              <td>{registro["e-mail"]}</td>
              <td>{registro.region}</td>
              <td>{registro.mto_devo_anteriores_pesos}</td>

              <td>{registro.mto_devo_en_proceso_pesos}</td>
              <td>{registro.tipo_devolucion}</td>
              <td>{registro.pk_dpe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
