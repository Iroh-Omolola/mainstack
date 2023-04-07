import { ReactNode} from "react";
import { DashboardSideBar } from "./DashboardSideBar";
import { NavBar } from "./NavBar";

type DashboardLayoutProps = {
    children?: ReactNode;
}

export const DashboardLayout = ({children}:DashboardLayoutProps) => {

    return (
      <div className="h-[100vh] w-[100%]  bg-white  relative flex">
        <div className="h-[100vh] z-[100]  bg-white border-r border-[#EFF1F6] flex flex-col justify-between ">
          <DashboardSideBar />
        </div>
        <div className="w-full  overflow-x-hidden px-3 ">
          <div className="flex-col lg:px-5 xl:px-10 ">
            <div className="top-0 w-full  justify-between">
              <NavBar />
            </div>
            <div className=" mt-24">
              <div className="w-full overflow-hidden">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}