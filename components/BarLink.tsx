import Link from "next/link";
import { useRouter } from "next/router";

interface BarLinkProps {
  Icon?: any;
  path: string;
  name: string;
  exact?: boolean | false;
}
export const BarLink = ({ Icon, path, name, exact }: BarLinkProps) => {
  const router = useRouter();
  let isActive = exact ? router.asPath == path : router.asPath.includes(path);
  return (
    <Link href={path}>
      <div
        className={`flex lg:pl-[30px] space-x-1  lg:pr-[30px]  lg:justify-start justify-center  py-2 mt-3  mb-[12px] lg:py-[10px] gap-2 items-center cursor-pointer  ${
          isActive ? " text-primary" : "text-text_black"
        }`}
      >
        <Icon fill={isActive ? "#FF5403" : "#56616B"} />
        <span
          className={`whitespace-nowrap font-kraig ${
            isActive ? "text-primary " : "text-[#56616B]"
          } hidden lg:block text-[14px]  font-semibold `}
        >
          {name}
        </span>
      </div>
    </Link>
  );
};
