import { MouseEventHandler, ReactNode } from "react";

type ContentButtonProps = {
  src: string;
  alt: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const ContentButton: React.FC<ContentButtonProps> = ({
  src,
  alt,
  children,
  onClick,
}) => {
  return (
    <input className="w-[365px] h-[256px] bg-gray-100 pt-[12px] pr-0 pb-0 pl-0 rounded-tl-[10px] flex flex-col items-center justify-center">
      <img src={src} alt={alt} />
      <p className="text-center text-[18px] text-[#353535]">{children}</p>
    </input>
  );
};

export default ContentButton;
