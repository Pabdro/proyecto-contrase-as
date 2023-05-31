import CerrarBtn from "../assets/cerrar.svg";
const Observador = ({ children, cerrar }) => {
  const handleClose = () => {
    cerrar();
  };
  
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-yellow-200 bg-opacity-50">
        <div className="bg-yellow-300 shadow-lg rounded-md p-4">
          <div className="absolute right-3 top-3 w-5 h-5 cursor-pointer">
          <img src={CerrarBtn} alt="cerrar modal" onClick={handleClose} />
          </div>
          {children}
        </div>
      </div>
    );
};
export default Observador;