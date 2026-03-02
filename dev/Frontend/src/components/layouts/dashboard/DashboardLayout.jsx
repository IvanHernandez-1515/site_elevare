import {Outlet} from "react-router-dom";

//commons
import { Sidebar } from "../../common/dashboard/sidebar/Sidebar";
import { Topbar } from "../../common/dashboard/topbar/Topbar";

export const DashboardLayout = ({children}) => {
    return (
        <>
            <div className="min-h-screen xl:flex">
                <Sidebar />
                <div className="flex-1 transition-all duration-300 ease-in-out lg:ml-[290px]">
                    <Topbar />
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}