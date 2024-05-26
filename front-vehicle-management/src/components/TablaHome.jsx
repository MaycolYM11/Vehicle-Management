import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Formulario from "./Formulario";
import "./Style.css";

const Home = () => {
  const [propietarios, setPropietarios] = useState([]);
  const [selectedPropietario, setSelectedPropietario] = useState(null);
  const [registerform, setRegisterform] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/propietarios/mostrarpropietarios") // Reemplaza la URL con la del endpoint de tu servidor
      .then((response) => response.json())
      .then((data) => setPropietarios(data));
  }, []);

  const handlePropietarioClick = (propietario) => {
    setSelectedPropietario(propietario);
  };

  const handleRegisterFormClose = () => {
    setRegisterform(false);
  }

  return (
    <div className="contenedorMain">
      <div className="title">
        <h1>Tabla de Propietarios</h1>
        <div className="contenedor-btn">
          <button className="btn-propietario" onClick={() => setRegisterform(true)}>+ Agregar</button>
        </div>
        <Formulario isOpen={registerform} closeModal={handleRegisterFormClose} />
      </div>

      <div className="contenedorDatos">
        <div className="izquierdaContenedor">
          <h2>Propietarios</h2>
          <table className="table__Propietarios">
            <thead className="thead__Propietarios">
              <tr className="tr__Propietarios_tittle">
                <th className="th__Propietarios_nombre">Nombre</th>
                <th className="th__Propietarios_apellido">Apellido</th>
                <th className="th__Propietarios_Documento">Documento</th>
                <th className="th__Propietarios_Telefono">Teléfono</th>
                <th className="th__Propietarios_Direccion">Dirección</th>
                <th className="th__Propietarios_vehiculos">Vehículos</th>
                <th className="th__Propietarios_acciones">Aciones</th>
              </tr>
            </thead>
            <tbody className="tbody__Propietarios">
              {propietarios.map((propietario) => (
                <tr className="tr__Propietarios" key={propietario._id}>
                  <td className="td__Propietarios_nombre">
                    {propietario.nombre}
                  </td>
                  <td className="td__Propietarios_apellido">
                    {propietario.apellido}
                  </td>
                  <td className="td__Propietarios_Documento">
                    {propietario.documento}
                  </td>
                  <td className="td__Propietarios_Telefono">
                    {propietario.telefono}
                  </td>
                  <td className="td__Propietarios_Direccion">
                    {propietario.direccion}
                  </td>
                  <td
                    className="td__Propietarios_vehiculos"
                  >
                    {propietario.vehiculos.length}
                  </td>
                  <td className="td__Propietarios_acciones">
                    <button className="btn-borrar">
                      <FontAwesomeIcon icon={faTrash} size="lg" />
                    </button>
                    <button type="button" className="btn-agregar" onClick={() => handlePropietarioClick(propietario)}>
                      <FontAwesomeIcon icon={faCar} size="lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="derechaContenedor">
          {selectedPropietario && (
            <div>
              <h3>Vehiculos</h3>
              {selectedPropietario.vehiculos.map((vehiculo, index) => (
                <table className="table__Vehiculos" key={index}>
                  <thead className="thead__Vehiculos">
                    <tr className="tr__Vehiculos_tittle">
                      <th className="th__Vehiculos_año">Año</th>
                      <th className="th__Vehiculos_modelo">Modelo</th>
                      <th className="th__Vehiculos_color">Color</th>
                      <th className="th__Vehiculos_matricula">Matrícula</th>
                    </tr>
                  </thead>
                  <tbody className="tbody__Vehiculos">
                    <tr className="tr__Vehiculos">
                      <td className="td__Vehiculos_año">{vehiculo.año}</td>
                      <td className="td__Vehiculos_modelo">
                        {vehiculo.modelo}
                      </td>
                      <td className="td__Vehiculos_color">{vehiculo.color}</td>
                      <td className="td__Vehiculos_matricula">
                        {vehiculo.matricula}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
