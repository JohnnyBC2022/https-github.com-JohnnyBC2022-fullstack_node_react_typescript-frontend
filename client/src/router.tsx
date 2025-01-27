import {createBrowserRouter} from 'react-router-dom'

import Products from './views/Products'
import NewProduct from './views/NewProduct'
import Layout from './layouts/Layout'
import { action as newProductAction } from './components/NewProductForm'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Products />
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            }
        ]
    }
])