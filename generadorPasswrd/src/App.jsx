import React, { useState, useEffect } from 'react';
import './App.css'
import Barrarriba from './componentes/Barrarriba'
import IngresoNombre from './componentes/IngresoNombre'
import HistorialContraseñas from './componentes/HistorialContraseñas'
import Observador from './componentes/Observador';
function App() {
  const [contraseñas, setContraseñas] = useState([]);
  const [observar, setObservar] = useState(false);
  const [contadorHistorial, setContadorHistorial] = useState({});
  //mostrar observador
  const toggleObservador = () => {
    setObservar(!observar);
  };
  const agregarContraseña = (nuevaContraseña) => {
    setContraseñas([...contraseñas, nuevaContraseña]);
  };
  // Cargar historial de contraseñas desde el localStorage al iniciar la aplicación
  useEffect(() => {
    const storedContraseñas = localStorage.getItem('contraseñas');
    if (storedContraseñas) {
      setContraseñas(JSON.parse(storedContraseñas));
    }
  }, []);
  // Actualizar el localStorage cuando se modifica el historial de contraseñas
  useEffect(() => {
    localStorage.setItem('contraseñas', JSON.stringify(contraseñas));
    //contador del numero de historiales
    const contador = contraseñas.reduce((contador, contraseña) => {
      const contadorContraseña = contraseña;
      contador[contadorContraseña] = (contador[contadorContraseña] || 0) + 1;
      return contador;
    }, {});
    setContadorHistorial(contador);
  }, [contraseñas]);
  //eliminador de historiales
  const eliminarHistorial = (index) => {
    const nuevasContraseñas = [...contraseñas];
    nuevasContraseñas.splice(index, 1);
    setContraseñas(nuevasContraseñas);
  };
  return (
    <div className="box-border p-0 m-0 font-roboto text-base bg-violet-500 min-h-screen">
      <Barrarriba/>
      <div className="max-w-500 w-90 mx-auto my-40">
        <IngresoNombre peticionContraseña={agregarContraseña}/>
        {contraseñas.length > 0 && (<HistorialContraseñas contraseñas={contraseñas} peticionEliminarHistorial={eliminarHistorial}/>)}
      </div>
      <div className="fixed bottom-0 right-0 m-4">
        <button
          onClick={toggleObservador}
          className="bg-zinc-700 hover:bg-zinc-500 font-bold text-white px-4 py-2 rounded-md">
          Observador
        </button>
      </div>
      {observar && (
        <Observador cerrar={toggleObservador}>
          <h2 className="text-black text-3xl text-center font-bold">
            Observador Contador Historial
          </h2>
          <ul className="space-y-4">
            {Object.entries(contadorHistorial).map(([contadorContraseña, count]) => (
              <li key={contadorContraseña}>
                <strong>Cantidad historiales: {count}</strong> 
              </li>
            ))}
          </ul>
        </Observador>
      )}
    </div>
  )
}
export default App