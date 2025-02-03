import { ChangeEvent, useState } from "react";
import "./App.css";
import ResetButton from "./components/buttons/ResetButton";
import Editor from "./components/Editor";
import LineSeparator from "./components/LineSeparator";
import ContentButton from "./components/buttons/ContentButton";
import PrimaryButton from "./components/buttons/PrimaryButton";
import Logo from "./components/Logo";
import defaultBg from "./assets/start-img.png";
import Content from "./components/Content";

function App() {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);
  const [bgImage, setBgImage] = useState<string | undefined>(defaultBg);
  const [overlayImage, setOverlayImage] = useState<string | null>(null);

  const handleBgChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setBgImage(e.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setOverlayImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex gap-4">
      <Editor src={bgImage}>
        {overlayImage && (
          <div className="relative w-full h-screen">
            <Content
              type="image"
              imageUrl={overlayImage}
              clearValue={() => setOverlayImage("")}
            />
          </div>
        )}
        {showText ? (
          <div className="relative w-full h-screen">
            <Content
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              clearValue={() => setText("")}
            />
          </div>
        ) : null}
      </Editor>
      <div className="min-w-[759px] bg-white flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <Logo />
          <ResetButton
            onClick={() => {
              setBgImage(defaultBg);
              setText("");
              setShowText(false);
              setOverlayImage(null);
            }}
          />
        </div>

        <LineSeparator />

        <div className="min-w-full bg-gray-100 rounded-[10px]">
          <p className="p-6 px-4 text-[18px] font-bold text-[#353535]">
            Add content
          </p>
        </div>

        <div className="flex gap-4 flex-wrap w-[759px] h-[609px]">
          <ContentButton
            onClick={() => {
              setShowText(true);
              if (bgImage === defaultBg) {
                setBgImage(undefined);
              }
            }}
            src="src\assets\text.svg"
            alt="Text image"
          >
            Text
          </ContentButton>
          <ContentButton
            onInputChange={handleImageUpload}
            src="src\assets\img.svg"
            alt="Image"
            isFileInput
          >
            Image
          </ContentButton>
          <ContentButton
            onInputChange={handleBgChange}
            src="src\assets\background.svg"
            alt="Background image"
            isFileInput
          >
            Background
          </ContentButton>
        </div>

        <LineSeparator />

        <div className="flex justify-end items-end w-full h-full">
          <PrimaryButton onClick={() => {}}>Export to PNG</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default App;
