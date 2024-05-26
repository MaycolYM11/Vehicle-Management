import React, { useState, useEffect } from "react";
import axios from "axios";

export const useGetPropietarios = () => {
  const [propietarios, setPropietarios] = useState([]);

  const fetchPropietarios = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/propietarios/mostrarpropietarios"
      );
      const data = await response.json();
      setPropietarios(data);
    } catch (error) {
      console.error("Error al obtener los propietarios:", error);
    }
  };

  useEffect(() => {
    fetchPropietarios();
  }, []);

  return [propietarios, fetchPropietarios];
};

export const eliminarPropietario = async (documento, onSuccess) => {
  try {
    const response = await fetch(
      `http://localhost:3001/propietarios/eliminar/${documento}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      console.log("Propietario eliminado exitosamente");
      onSuccess();
    } else {
      console.error("Error al eliminar el propietario");
    }
  } catch (error) {
    console.error("Error al eliminar el propietario:", error);
  }
};

export const agregarPropietario = async (
  nombre,
  apellido,
  documento,
  telefono,
  direccion,
  vehiculos
) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/propietarios/crearpropietario",
      {
        nombre,
        apellido,
        documento,
        telefono,
        direccion,
        vehiculos,
      }
    );
    return response.data;
  } catch (error) {
    console.error("No se pudo agregar:", error);
    throw error;
  }
};
