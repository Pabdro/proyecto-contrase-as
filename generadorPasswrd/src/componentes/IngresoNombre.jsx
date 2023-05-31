import React, { useState } from "react";

const IngresoNombre = ({ peticionContraseña }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [tipoContraseña, setTipoContraseña] = useState("");

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  // generador de contraseñas
  const generatePassword = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-/?><,.":;{}[]=`~';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setPassword(newPassword);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion de espacios
    if (!nombre || !correo || !tipoContraseña) {
      alert("Complete todos los espacios");
      return;
    }

    // Creando la contraseña con sus respectivos datos
    const nuevaContraseña = {
      nombre,
      correo,
      tipoContraseña,
    };

    // Invocar la función para agregar la nueva contraseña
    peticionContraseña(nuevaContraseña);

    setNombre("");
    setCorreo("");
    setTipoContraseña("");
  };
  
    return (
      <div className="bg-yellow-100 shadow-lg rounded-md my-10 py-5 w-full md:w-1/3 mx-auto">
      <h2 className="text-black text-3xl text-center font-bold">
        Generar Contraseñas
      </h2>
      <form className="py-2 my-5 mx-5" onSubmit={handleSubmit}>
        <input
          id="Nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingrese Nombre"
          className="border-2 w-full p-1 bg-transparent text-black border-yellow-500 rounded-full mb-5"
        />

        <input
          id="correo"
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Ingrese su correo"
          className="border-2 w-full p-1 bg-transparent text-black border-yellow-500 rounded-full"
        />

        <select
          id="tipoContraseña"
          value={tipoContraseña}
          onChange={(e) => setTipoContraseña(e.target.value)}
          className="border-2 w-full p-1 mt-5 bg-transparent border-yellow-500 rounded-full"
        >
          <option value="">Apretar para generar</option>
          <option value={password}>Usar esta opcion</option>
        </select>
        <input
          type="submit"
          value="Generar"
          onClick={generatePassword}
          className="bg-zinc-700 w-full p-3 rounded-md my-5 text-white font-bold cursor-pointer hover:bg-zinc-500"
        />
      </form>
    </div>
  );
};
export default IngresoNombre;