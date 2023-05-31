import {  Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import NavSettings from "../NavSettings/NavSettings";
import './Layout.scss'



function Layout() {
    return (
        <div className="wraper">
            <Aside>
                <NavSettings/>
            </Aside>

            <main>
                <Outlet />
            </main>

            <Aside /> 
        </div>
    );
}

export { Layout };