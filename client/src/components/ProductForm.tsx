import { Product } from "../types"

type ProductFormProps = {
    product?: Product
}

export default function ProductForm({product}: ProductFormProps) {
  return (
    <>
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
            defaultValue={product?.name}
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
            defaultValue={product?.price}
          />
        </div>

        
    </>
  )
}
