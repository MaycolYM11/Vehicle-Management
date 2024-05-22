import React, { useState } from 'react';
import CustomInput from './CustomInput';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [documento, setDocumento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [vehiculos, setVehiculos] = useState([]);
    
    const masInputs = () => {
        const casillas = parseInt(document.getElementById('vehiculos').value, 10);
        const nuevosVehiculos = new Array(casillas).fill('').map((_, index) => ({ anio: '', modelo: '', color: '', matricula: '' }));
        setVehiculos(nuevosVehiculos);
    };

    const handleChangeVehiculo = (index, key, value) => {
        const nuevosVehiculos = [...vehiculos];
        nuevosVehiculos[index][key] = value;
        setVehiculos(nuevosVehiculos);
    };

    console.log(vehiculos);
    return (
        <div>
            <form>
                <h1>Ingrese los datos</h1>
                <input placeholder='nombre' type='text' id='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input placeholder='apellido' type='text' id='apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
                <input placeholder='documento' type='number' id='documento' value={documento} onChange={(e) => setDocumento(e.target.value)} />
                <input placeholder='teléfono' type='number' id='teléfono' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                <input placeholder='dirección' type='text' id='dirección' value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                <input placeholder='vehiculos' type='number' id='vehiculos' onBlur={masInputs} />

                {vehiculos.map((vehiculo, index) => (
                    <div key={index}>
                        <CustomInput
                            type="text"
                            placeholder={`Vehículo ${index + 1} - Año`}
                            value={vehiculo.anio}
                            onChange={(value) => handleChangeVehiculo(index, 'anio', value)}
                        />
                        <CustomInput
                            type="text"
                            placeholder={`Vehículo ${index + 1} - Modelo`}
                            value={vehiculo.modelo}
                            onChange={(value) => handleChangeVehiculo(index, 'modelo', value)}
                        />
                        <CustomInput
                            type="text"
                            placeholder={`Vehículo ${index + 1} - Color`}
                            value={vehiculo.color}
                            onChange={(value) => handleChangeVehiculo(index, 'color', value)}
                        />
                        <CustomInput
                            type="text"
                            placeholder={`Vehículo ${index + 1} - Matrícula`}
                            value={vehiculo.matricula}
                            onChange={(value) => handleChangeVehiculo(index, 'matricula', value)}
                        />
                    </div>
                ))}

                <button>xddd</button>
            </form>
        </div>
    );
};

export default Formulario;
