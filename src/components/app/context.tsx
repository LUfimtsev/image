import React, {createContext, useState} from "react";

interface ImageProviderProps {
    children: React.ReactNode;
}

interface ImageContextProps {
    setImage: (image: string) => void;
    image: string;
}

const ImageContext = createContext<ImageContextProps>({
    setImage: () => null,
    image: ""
});

export const useImageContext = (): ImageContextProps => React.useContext(ImageContext);

const ImageProvider = ({ children }: ImageProviderProps): JSX.Element => {
    const [uploadedImage, setUploadedImage] = useState("");

    return (
        <ImageContext.Provider value={{ setImage: setUploadedImage, image: uploadedImage}}>
            {children}
        </ImageContext.Provider>
    );
}

export default ImageProvider;
