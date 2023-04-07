import Link from "next/link";
import routes from "../utils/routes";
import {
  Alarm,
  Camera,
  Dashboard,
  Delete,
  Dots,
  Edit,
  File,
  HourGlass,
  Logo,
  People,
  Profile,
  Subscription,
} from "./assets";
import { BarLink } from "./BarLink";

const BAR_ROUTES_ONE = [
  {
    name: "Dashboard",
    path: routes.DASHBOARD,
    Icon: Dashboard,
    exact: true,
  },
  {
    name: "Item 1",
    path: routes.ITEM_ONE,
    Icon: Edit,
    exact: false,
  },
  {
    name: "Item 2",
    path: routes.ITEM_TWO,
    Icon: People,
    exact: false,
  },
  {
    name: "Item 3",
    path: routes.ITEM_THREE,
    Icon: HourGlass,
    exact: false,
  },
];
const BAR_ROUTES_TWO = [
  {
    name: "Item 4",
    path: routes.ITEM_FOUR,
    Icon: Camera,
    exact: false,
  },
  {
    name: "Item 5",
    path: routes.ITEM_FIVE,
    Icon: Delete,
    exact: false,
  },
];
const BAR_ROUTES_THREE = [
  {
    name: "Item 6",
    path: routes.ITEM_SIX,
    Icon: Subscription,
    exact: false,
  },
  {
    name: "Item 7",
    path: routes.ITEM_SEVEN,
    Icon: File,
    exact: false,
  },
  {
    name: "Item 8",
    path: routes.ITEM_EIGHT,
    Icon: Alarm,
    exact: false,
  },
];
export const DashboardSideBar = () => {
  return (
    <div className="w-[3rem] xs:w-[5rem] lg:w-[16rem]">
      <div className="flex w-full flex-col items-center lg:items-start pl-0  lg:mt-0">
        <Link href={"/"}>
          <div className="flex h-[60px] mt-[22px] lg:pl-[32px] cursor-pointer ">
            <Logo />
          </div>
        </Link>
        <div className="w-full space-y-36">
          <div className="">
            <div className=" overflow-x-hidden  ">
              {BAR_ROUTES_ONE?.map((link, id) => (
                <BarLink key={id} {...link} />
              ))}
            </div>
            <div className="overflow-x-hidden  ">
              <h1 className="text-text_black lg:mt-3 lg:pl-[30px] hidden lg:block font-buch text-[12px]">
                OTHERS 1
              </h1>
              {BAR_ROUTES_TWO?.map((link, id) => (
                <BarLink key={id} {...link} />
              ))}
            </div>
            <div className="overflow-x-hidden ">
              <h1 className="text-text_black hidden lg:mt-3  lg:block  lg:pl-[30px]  font-buch text-[12px]">
                OTHERS 2
              </h1>
              {BAR_ROUTES_THREE?.map((link, id) => (
                <BarLink key={id} {...link} />
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <div
              className={`flex lg:pl-[30px] lg:justify-start justify-center space-x-1 xs:pl-[22px] pl-[8px] pr-[30px]   py-2 mt-3  mb-[15px] lg:py-[10px] gap-2 items-center cursor-pointer
               `}
            >
              <div className="rounded-full w-[34px] h-[34px] object-contain">
                <Profile />
              </div>
              <span
                className={`whitespace-nowrap font-medium text-[#56616B]  hidden lg:block text-[14px] font-sohne `}
              >
                Blessing Daniels
              </span>
            </div>
            <div className="my-auto  pr-3 lg:flex hidden">
              <Dots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
