import axios from 'axios';
import { DraftProductSchema } from './../types/index';
import { safeParse } from "valibot";


type ProductData = {
    [k: string]: FormDataEntryValue;
}

export async function addProduct(data: ProductData) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        })
        if(result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/v1/products`
            const { data} = await axios.post(url, {
                name: result.output.name,
                price: result.output.price,
            })
        } else {
            throw new Error('Datos no válidos')
        }
    } catch (error) {
        console.log(error)
    }
}