import {createBrowserRouter} from 'react-router-dom'

import Products, { loader as productsLoader} from './views/Products'
import NewProduct from './views/NewProduct'
import Layout from './layouts/Layout'
import { action as newProductAction } from './components/NewProductForm'
import EditProduct from './views/EditProduct'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', // ROA Pattern (Resource-oriented design)
                element: <EditProduct/>
            }
        ]
    }
])