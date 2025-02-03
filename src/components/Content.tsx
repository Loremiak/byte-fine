import {
  ChangeEventHandler,
  MouseEventHandler,
  useState,
  useRef,
  useEffect,
} from "react";
import Draggable from "react-draggable";
import SelectColor from "./SelectColor";

type ContentProps = {
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string | number | readonly string[];
  clearValue: MouseEventHandler<HTMLButtonElement> | undefined;
  type: "text" | "image";
  imageUrl?: string;
};

const Content: React.FC<ContentProps> = ({
  onChange,
  value,
  clearValue,
  type,
  imageUrl,
}) => {
  const [textColor, setTextColor] = useState("#353535");
  const [size, setSize] = useState({ width: 350, height: 120 });
  const [isResizing, setIsResizing] = useState(false);
  const resizeHandleRef = useRef<HTMLDivElement>(null);
  const initialMousePosition = useRef({ x: 0, y: 0 });
  const initialSize = useRef({ width: 0, height: 0 });

  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    initialMousePosition.current = { x: e.clientX, y: e.clientY };
    initialSize.current = { width: size.width, height: size.height };
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    const handleResize = (e: MouseEvent) => {
      if (isResizing) {
        const deltaX = e.clientX - initialMousePosition.current.x;
        const deltaY = e.clientY - initialMousePosition.current.y;

        const newWidth = initialSize.current.width + deltaX;
        const newHeight = initialSize.current.height + deltaY;

        const minWidth = 100;
        const minHeight = 50;

        setSize({
          width: Math.max(newWidth, minWidth),
          height: Math.max(newHeight, minHeight),
        });
      }
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleResize);
      document.addEventListener("mouseup", stopResizing);
    } else {
      document.removeEventListener("mousemove", handleResize);
      document.removeEventListener("mouseup", stopResizing);
    }

    return () => {
      document.removeEventListener("mousemove", handleResize);
      document.removeEventListener("mouseup", stopResizing);
    };
  }, [isResizing]);

  return (
    <Draggable handle=".drag-handle" bounds="parent">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          draggable="true"
          className="absolute left-[-20px] top-[-20px] w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center drag-handle cursor-grab active:cursor-grabbing"
        >
          <img
            src="src/assets/move.svg"
            alt="move icon"
            className="w-6 h-6 pointer-events-none"
          />
        </button>

        <button
          onClick={clearValue}
          className="absolute top-[-12px] right-[-12px] text-white bg-white rounded-full w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
        >
          <img src="src/assets/delete.svg" alt="" />
        </button>

        {type === "text" ? (
          <>
            <textarea
              autoFocus
              placeholder="Type your text here"
              className={`p-[12px] px-[24px] border-2 border-[#7209B7] outline-none resize-none text-[32px] font-bold text-center ${
                value === "Type your text here" ? "opacity-25" : "opacity-100"
              }`}
              style={{
                color: textColor,
                width: size.width,
                height: size.height,
              }}
              onChange={onChange}
              value={value}
            />
            <div className="flex gap-[4px]">
              {["#353535", "#FFFFFF", "#CF0000", "#0055FF", "#00DA16"].map(
                (color) => {
                  return (
                    <SelectColor
                      key={color}
                      color={color}
                      selectedColor={textColor}
                      setSelectedSelect={setTextColor}
                    />
                  );
                }
              )}
            </div>
          </>
        ) : (
          <img
            src={imageUrl}
            alt="Draggable"
            style={{ width: size.width, height: "auto" }}
            className="select-none"
          />
        )}

        <div
          ref={resizeHandleRef}
          className="absolute right-[-12px] bottom-[-12px] w-[24px] h-[24px] bg-[#7209B7] rounded-full border-4 border-white cursor-se-resize"
          onMouseDown={startResizing}
        />
      </div>
    </Draggable>
  );
};

export default Content;
