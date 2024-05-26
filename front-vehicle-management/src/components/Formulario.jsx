import React, { useState } from "react";
import CustomInput from "./CustomInput";
import "./Style.css";
import Swal from "sweetalert2";
import { agregarPropietario } from "./utils";

const Formulario = ({ isOpen, closeModal, fetchPropietarios}) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documento, setDocumento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [vehiculos, setVehiculos] = useState([]);

  if (!isOpen) return null;

  const handleAgregarPropietario = async () => {
    try {
      const response = await agregarPropietario(
        nombre,
        apellido,
        documento,
        telefono,
        direccion,
        vehiculos
      );

      if (response.pass) {
        Swal.fire({
          icon: "success",
          text: `Registro completado. Bienvenido ${nombre}`,
        });
        fetchPropietarios();
        closeModal();
      } else {
        Swal.fire({
          icon: "error",
          text: "Registro no completado. Rectifique los campos para continuar con el registro",
        });
      }
    } catch (error) {
      console.error("No se pudo agregar:", error);
    }
  };

  const Verificar_nombre = () => {
    const Innombre = document.getElementById("name").value;
    let con = true;
    let validacionlt = /^[A-Za-z]+$/;

    if (Innombre.trim() === "") {
      document.getElementById("wrongname").innerHTML =
        "Este espacio no puede quedar en blanco";
      con = false;
    } else if (!validacionlt.test(Innombre)) {
      document.getElementById("wrongname").innerHTML = "Digitar solo letras";
      con = false;
    } else {
      document.getElementById("wrongname").innerHTML = "";
    }

    return con;
  };

  function Verificar_apell() {
    const Inapell = document.getElementById("apell").value;

    let con = true;
    let validacionlt = /^[A-Za-z]+$/;

    if (Inapell.trim() === "") {
      document.getElementById("wrongapell").innerHTML =
        "Este espacio no puede quedar en blanco";
      con = false;
    } else if (!validacionlt.test(Inapell)) {
      document.getElementById("wrongapell").innerHTML = "Digitar solo letras";
      con = false;
    } else {
      document.getElementById("wrongapell").innerHTML = "";
    }

    return con;
  }

  function Verificar_id() {
    const Inid = document.getElementById("numid").value;
    // const TipoId = document.getElementById('tipoid').value;

    let validacionNM = /^[A-Za-z]+$/;
    let con = true;

    if (Inid.trim() === "") {
      document.getElementById("wrongid").textContent =
        "Este espacio no puede quedar en blanco";
      con = false;
    } else {
      if (validacionNM.test(Inid)) {
        document.getElementById("wrongid").textContent = "Digitar solo Numeros";
        con = false;
        console.log("tashhsjtaush");
      } else {
        document.getElementById("wrongid").innerHTML = "";
      }

      document.getElementById("wrongid").innerHTML = "";
    }

    return con;
  }

  function Verificar_tel() {
    const Intel = document.getElementById("cel").value;

    let con = true;
    let validacionlt = /^[A-Za-z]+$/;

    if (Intel === "") {
      document.getElementById("wrongtel").innerHTML =
        "Este espacio no puede quedar en blanco";
      con = false;
    } else if (validacionlt.test(Intel)) {
      document.getElementById("wrongtel").innerHTML = "Digitar solo numeros";
      con = false;
    } else {
      document.getElementById("wrongtel").innerHTML = "";
    }

    return con;
  }

  function Verificar_adreess() {
    const inDireccion = document.getElementById("direccion").value;

    let con = true;

    if (inDireccion === "") {
      document.getElementById("wrongdir").innerHTML =
        "Este espacio no puede quedar en blanco";
      con = false;
    } else {
      document.getElementById("wrongdir").innerHTML = "";
    }

    return con;
  }

  const Verificar_registro = () => {
    let con = true;
    if (!Verificar_nombre()) con = false;
    if (!Verificar_apell()) con = false;
    if (!Verificar_id()) con = false;
    if (!Verificar_tel()) con = false;
    if (!Verificar_adreess()) con = false;

    if (con) {
      handleAgregarPropietario();
    } else {
      Swal.fire({
        icon: "error",
        text: "Registro no completado. Rectifique los campos para continuar con el registro",
      });
    }

    return con;
  };

  const masInputs = () => {
    const casillas = parseInt(document.getElementById("vehiculos").value, 10);
    const nuevosVehiculos = new Array(casillas)
      .fill("")
      .map((_, index) => ({ año: "", modelo: "", color: "", matricula: "" }));
    setVehiculos(nuevosVehiculos);
  };

  const handleChangeVehiculo = (index, key, value) => {
    const nuevosVehiculos = [...vehiculos];
    nuevosVehiculos[index][key] = value;
    setVehiculos(nuevosVehiculos);
  };

  return (
    <div className="form-register-container">
      <div className="modal">
        <form>
          <h1>Ingrese los datos</h1>
          <input
            placeholder="nombre"
            type="text"
            id="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            onBlur={Verificar_nombre}
          />
          <p id="wrongname"></p>
          <input
            placeholder="apellido"
            type="text"
            id="apell"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            onBlur={Verificar_apell}
          />
          <p id="wrongapell"></p>
          <input
            placeholder="documento"
            type="number"
            id="numid"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            onBlur={Verificar_id}
          />
          <p id="wrongid"></p>
          <input
            placeholder="teléfono"
            type="number"
            id="cel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            onBlur={Verificar_tel}
          />
          <p id="wrongtel"></p>
          <input
            placeholder="dirección"
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            onBlur={Verificar_adreess}
          />
          <p id="wrongdir"></p>
          <input
            placeholder="vehiculos"
            type="number"
            id="vehiculos"
            onBlur={masInputs}
          />

          <div className="vehiculo-inputs">
            {vehiculos.map((vehiculo, index) => (
              <div key={index} className="vehiculo-container">
                <CustomInput
                  type="text"
                  placeholder={`Vehículo ${index + 1} - Año`}
                  value={vehiculo.año}
                  onChange={(value) =>
                    handleChangeVehiculo(index, "año", value)
                  }
                />
                <CustomInput
                  type="text"
                  placeholder={`Vehículo ${index + 1} - Modelo`}
                  value={vehiculo.modelo}
                  onChange={(value) =>
                    handleChangeVehiculo(index, "modelo", value)
                  }
                />
                <CustomInput
                  type="text"
                  placeholder={`Vehículo ${index + 1} - Color`}
                  value={vehiculo.color}
                  onChange={(value) =>
                    handleChangeVehiculo(index, "color", value)
                  }
                />
                <CustomInput
                  type="text"
                  placeholder={`Vehículo ${index + 1} - Matrícula`}
                  value={vehiculo.matricula}
                  onChange={(value) =>
                    handleChangeVehiculo(index, "matricula", value)
                  }
                />
              </div>
            ))}
          </div>

          <button type="button" onClick={Verificar_registro}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
