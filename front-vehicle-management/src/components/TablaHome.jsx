import React, { useState, useEffect } from "react";
import "./Style.css";

const Home = () => {
  const [propietarios, setPropietarios] = useState([]);
  const [selectedPropietario, setSelectedPropietario] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/propietarios/mostrarpropietarios") // Reemplaza la URL con la del endpoint de tu servidor
      .then((response) => response.json())
      .then((data) => setPropietarios(data));
  }, []);

  const handlePropietarioClick = (propietario) => {
    setSelectedPropietario(propietario);
  };

  return (
    <div className="contenedorMain">
      <h1>Tabla de Propietarios</h1>
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
              </tr>
            </thead>
            <tbody className="tbody__Propietarios">
              {propietarios.map((propietario) => (
                <tr className="tr__Propietarios" key={propietario._id}>
                  <td className="td__Propietarios_nombre">{propietario.nombre}</td>
                  <td className="td__Propietarios_apellido">{propietario.apellido}</td>
                  <td className="td__Propietarios_Documento">{propietario.documento}</td>
                  <td className="td__Propietarios_Telefono">{propietario.telefono}</td>
                  <td className="td__Propietarios_Direccion">{propietario.direccion}</td>
                  <td className="td__Propietarios_vehiculos" onClick={() => handlePropietarioClick(propietario)}>
                    {propietario.vehiculos.length}
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
                <table key={index}>
                  <thead>
                    <tr>
                      <th>Año</th>
                      <th>Modelo</th>
                      <th>Color</th>
                      <th>Matrícula</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{vehiculo.año}</td>
                      <td>{vehiculo.modelo}</td>
                      <td>{vehiculo.color}</td>
                      <td>{vehiculo.matricula}</td>
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