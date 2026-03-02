import {Outlet} from "react-router-dom";

//commons
import { Sidebar } from "../../common/dashboard/sidebar/Sidebar";
import { Topbar } from "../../common/dashboard/topbar/Topbar";

export const DashboardLayout = ({children}) => {
    return (
        <>
            <main>
                <Sidebar />
                <div className="flex-1 transition-all duration-300 ease-in-out lg:ml-[290px]">
                    <Topbar />
                    <div>
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}