const HistorialContraseñas = ({ contraseñas, peticionEliminarHistorial }) => {
    return (
      <div className="container bg-yellow-100 rounded-md my-10 py-5 w-full md:w-1/3 mx-auto m-4 shadow-lg">
        <h2 className="text-black text-3xl text-center font-bold">
          Historial contraseñas
        </h2>
        <ul>
          {contraseñas.map((contraseña, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {contraseña.nombre}<br />
              <strong>Correo:</strong> {contraseña.correo}<br />
              <strong>Contraseña:</strong> {contraseña.tipoContraseña}
              <div className="flex justify-center">
                <button onClick={() => peticionEliminarHistorial(index)} className="bg-zinc-700 hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded">
                  Eliminar
                </button>
              </div>
              <br />
            </li>
          ))}
        </ul>
      </div>
  );
};
export default HistorialContraseñas;