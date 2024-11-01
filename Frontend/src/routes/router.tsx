import { createBrowserRouter, Navigate } from "react-router-dom"
import DashboardLayout from "../layout/DashboardLayout"
import Home from "@/pages/Home"
import CountryCode from "@/pages/CountryCode"


export const routesApp =[
    {
        to: "/",
        title: "Home",
        description: "Home page",
        component: <Home />
    },{
        to: "/countries/:code",
        title: "Home",
        description: "Home page",
        component: <CountryCode />
    },
]


export const router = createBrowserRouter([
    {
        path : '/',
        element : <DashboardLayout/>,
        children:[
            ...routesApp.map( route =>({
                path: route.to,
                element : route.component
            })),
            {
                // redirect
                path : '',
                element : <Navigate to={routesApp[0].to}/>
            }    
        ],
        
    }
])