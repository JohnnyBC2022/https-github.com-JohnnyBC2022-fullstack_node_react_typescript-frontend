import {
  ActionFunctionArgs,
  Form,
  redirect,
  useNavigate,
} from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: Product;
};

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    await deleteProduct(+params.id);
    return redirect("/");
  }
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const navigate = useNavigate();
  const isAvailable = product.availability;
  return (
    <tr className="border-b">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">
        <form method="POST">
          <button
            type='button'
            name="availability"
            value={product.availability.toString()}
            className={`${isAvailable ? 'text-black' : 'text-red-600'} rounded-lg p-2 text-xs uppercase font-bold w-full border border-gray-800 hover:cursor-pointer hover:bg-gray-100`}
          >{isAvailable ? "Disponible" : "No Disponible"}</button>
        </form>
      </td>
      <td className="p-3 text-lg text-gray-800">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => navigate(`/productos/${product.id}/editar`)}
            className="bg-teal-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center hover:bg-teal-500"
          >
            Editar
          </button>

          <Form
            className="w-full"
            method="POST"
            action={`productos/${product.id}/eliminar`} //importante! esta url debe ser la misma que en el router
            onSubmit={(e) => {
              if (
                !confirm("¿Está seguro de que quieres eliminar este producto?")
              ) {
                e.preventDefault();
              }
            }}
          >
            <input
              type="submit"
              value="Eliminar"
              className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center hover:bg-red-500"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
}
