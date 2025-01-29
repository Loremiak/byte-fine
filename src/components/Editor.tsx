import { useState } from "react";

const Editor = () => {
  const [bgImage, setBgImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setBgImage(e.target?.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-w-[759px] bg-[#9B9B9B]">
      <img src="src\assets\start-img.png" />
    </div>
  );
};

export default Editor;
