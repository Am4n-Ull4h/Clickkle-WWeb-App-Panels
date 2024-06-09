// ImageContext.js
import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState('https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg');
  const [file, setFile] = useState(null);

  const updateImage = (newImage) => {
    setImage(newImage);
  };

  const updateImageFromFile = (newFile) => {
    setFile(newFile);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(newFile);
    fileReader.onloadend = () => {
      setImage(fileReader.result);
    };
  };

  return (
    <ImageContext.Provider value={{ image, file, updateImage, updateImageFromFile }}>
      {children}
    </ImageContext.Provider>
  );
};
