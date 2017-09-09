// React
import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

// Components
import App from '../Components/App'


export const makeMainRoutes = () => {
    return (
        <BrowserRouter history={history} >
            <App />
        </BrowserRouter>
    )
}
