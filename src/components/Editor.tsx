import { ReactNode } from "react";

type EditorProps = {
  src: string | undefined;
  children: ReactNode;
};

const Editor: React.FC<EditorProps> = ({ src, children }) => {
  console.log(src);
  return (
    <div
      className="relative min-w-[759px] h-[948px] bg-[#9B9B9B] bg-cover bg-center"
      style={src ? { backgroundImage: `url(${src})` } : {}}
    >
      {children}
    </div>
  );
};

export default Editor;
