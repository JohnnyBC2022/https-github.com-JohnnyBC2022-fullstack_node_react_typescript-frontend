import { ActionFunctionArgs, Link, LoaderFunctionArgs, redirect} from "react-router-dom";
import NewProductForm from "../components/NewProductForm";
import { getProductById, updateProduct } from "../services/ProductService";
import { value } from "valibot";

export async function loader({params}: LoaderFunctionArgs){
  if(params.id !== undefined) {
      const product = await getProductById(+params.id)
      if(!product) {
        //throw new Response('', {status: 404, statusText: 'Producto No Encontrado'})
        return redirect('/')
      }
      return product
  }
}

export async function action({ request, params } : ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());

  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }

  if (error.length) {
    return error;
  }
  if(params.id !== undefined) {
    await updateProduct(+params.id,data)

  }


  return redirect('/');
}


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
