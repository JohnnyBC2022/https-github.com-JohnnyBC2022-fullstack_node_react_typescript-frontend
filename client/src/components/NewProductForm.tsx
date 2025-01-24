

export default function NewProductForm() {
  return (
    <>
        <form className="mt-10">
        <div className="mb-4">
          <label
            className="text-slate-800 font-bold"
            htmlFor="name"
          >
            Nombre Producto:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-slate-100"
            placeholder="Nombre del producto..."
            name="name"
          />
        </div>
        <div className="mb-4">
          <label
            className="text-slate-800 font-bold"
            htmlFor="price"
          >
            Precio:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-slate-100"
            placeholder="Precio del producto, ej. 200,300"
            name="price"
          />
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-teal-600 text-white font-bold text-lg cursor-pointer rounded p-2 hover:bg-teal-500"
        />
      </form>
    </>
  )
}
