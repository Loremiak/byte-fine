import "./App.css";
import ResetButton from "./components/buttons/ResetButton";
import Editor from "./components/Editor";
import LineSeparator from "./components/LineSeparator";
import ContentButton from "./ContentButton";
import PrimaryButton from "./PrimaryButton";

function App() {
  return (
    <div className="flex gap-4">
      <Editor></Editor>
      <div className="min-w-[759px] bg-white flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="src\assets\logo.svg" />
            <p className="text-2xl font-bold leading-12 text-[#676767]">
              CanvasEditor
            </p>
          </div>

          <ResetButton />
        </div>

        <LineSeparator />

        <div className="min-w-full bg-gray-100">
          <p className="p-6 px-4 text-[18px] font-bold text-[#353535]">
            Add content
          </p>
        </div>

        <div className="flex gap-4 flex-wrap w-[759px] h-[609px]">
          <ContentButton
            onClick={() => {}}
            src="src\assets\text.svg"
            alt="Text image"
          >
            Text
          </ContentButton>
          <ContentButton
            onClick={() => {}}
            src="src\assets\img.svg"
            alt="Image"
            isFileInput
          >
            Image
          </ContentButton>
          <ContentButton
            onClick={() => {}}
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
