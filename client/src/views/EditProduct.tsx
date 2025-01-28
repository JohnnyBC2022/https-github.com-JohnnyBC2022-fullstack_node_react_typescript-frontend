import { Link } from "react-router-dom";
import NewProductForm from "../components/NewProductForm";

export default function EditProduct() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-700">Editar Producto</h2>
        <Link
          to="/"
          className="rounded-md bg-teal-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-teal-500"
        >
          Volver a Productos
        </Link>
      </div>

      <NewProductForm/>
    </>
  );
}
