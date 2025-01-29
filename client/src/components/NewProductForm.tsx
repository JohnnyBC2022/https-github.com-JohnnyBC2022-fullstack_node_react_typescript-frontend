import { ActionFunctionArgs, Form, useActionData, redirect, useLoaderData } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import { addProduct } from "../services/ProductService";
import { Product } from "../types";

export async function action({ request } : ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());

  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }

  if (error.length) {
    return error;
  }

  await addProduct(data)

  return redirect('/');
}

const availabilityOptions = [
  {name: 'Disponible', value: true},
  {name: 'No Disponible', value: false}
]

export default function NewProductForm() {
  const error = useActionData() as string;

  const product = useLoaderData() as Product
  return (
    <>
    {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form className="mt-10" method="POST">
        <div className="mb-4">
          <label className="text-slate-800 font-bold" htmlFor="name">
            Nombre Producto:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-slate-100"
            placeholder="Nombre del producto..."
            name="name"
            defaultValue={product.name}
          />
        </div>
        <div className="mb-4">
          <label className="text-slate-800 font-bold" htmlFor="price">
            Precio:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-slate-100"
            placeholder="Precio del producto, ej. 200,300"
            name="price"
            defaultValue={product.price}
          />
        </div>

        <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="availability"
        >Disponibilidad:</label>
        <select 
          name="availability"
          id="availability"
          className="mt-2 block w-full p-3 bg-gray-50"
          defaultValue={product?.availability.toString()}
        >
          {availabilityOptions.map(option =>(
            <option
              key={option.name}
              value={option.value.toString()}
            >{option.name}</option>
          ))}
          </select>

      </div>
        <input
          type="submit"
          className="mt-5 w-full bg-teal-600 text-white font-bold text-lg cursor-pointer rounded p-2 uppercase hover:bg-teal-500"
          value="añadir producto"
        />
      </Form>
    </>
  );
}
