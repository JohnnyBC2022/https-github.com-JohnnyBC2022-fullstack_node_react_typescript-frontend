import { boolean, number, object, string, InferOutput, array} from "valibot";

export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()
})

export const ProductsSchema = array(ProductSchema)

// en versiones anteriores había que importar output de valibot y hacer:
//  export type Product = Output<typeof ProductSchema>
export type Product = InferOutput<typeof ProductSchema>;