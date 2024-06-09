import { createContext, useState } from "react";

export const imgContext = createContext();

export const ImgValue = ({ children }) => {
  const [imgFile, setImgFile] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  const changeImg = (img) => {
    setImgFile(img);
  };

  return (
    <imgContext.Provider value={{ imgFile, changeImg }}>
      {children}
    </imgContext.Provider>
  );
};
