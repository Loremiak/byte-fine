import { MouseEventHandler, ReactNode } from "react";

type PrimaryButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="mt-[20px] ml-[33px] px-[32px] py-[8px] gap-[10px] text-white rounded-[5px] bg-[#7209B7] hover:bg-[#550788] focus:outline-none focus:ring-2 focus:ring-[#7209B780] focus:border-[#7209B780] focus:bg-[#7209B7] disabled:bg-[#CDCDCD] transition-all duration-[250ms] ease-in-out hover:cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
