export const Header = ({ setDate, date }) => {
  const data = ["1 Day", "3 Days", "30 Days", "All Time", "Custom Date"];
  return (
    <div className="space-y-5">
      <div className="flex md:flex-row flex-col  w-full justify-between">
        <div className=" ">
          <h1 className="text-[#131316] font-haibett font-bold text-[18px] sm:text-[20px]  md:text-[24px]">
            Good morning, Blessing ⛅️
          </h1>
          <p className="text-[#31373D]  sm:mt-2 font-buch font-normal text-[12px] md:text-[14px]">
            Check out your dashboard summary.
          </p>
        </div>
        <span className="text-primary font-buch  sm:mt-0 mt-1 flex my-auto cursor-pointer text-[14px]">
          View analytics
        </span>
      </div>
      <div className=" md:space-x-2 md:flex grid md:space-y-0 space-y-2 text-center ">
        {data.map((d, index) => (
          <div
            key={index + 1}
            className={`border  cursor-pointer w-auto px-3 rounded-[100px] py-2  ${
              date === d
                ? "bg-[#FFDDCD] border-[#FF5403]"
                : "bg-white border-[#EFF1F6]"
            } `}
            onClick={() => setDate(d)}
          >
            <p
              className={`text-[14px] text-[#31373D] ${
                date === d ? "text-[#FF5403]" : "text-[#31373D]"
              }  font-kraig`}
            >
              {d}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
