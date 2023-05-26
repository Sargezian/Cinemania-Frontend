import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {MantineProvider} from "@mantine/core";
import {UserProvider} from "./Context/UserContext.tsx";
import {Notifications} from "@mantine/notifications";
import FavoritesProvider from "./Context/FavoritesContext.tsx";
import FollowerProvider from "./Context/FollowContext.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <MantineProvider>
                <Notifications/>
                <UserProvider>
                    <FavoritesProvider>
                        <FollowerProvider>
                            <App/>
                        </FollowerProvider>
                    </FavoritesProvider>
                </UserProvider>
            </MantineProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
