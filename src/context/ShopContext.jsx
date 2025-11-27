import { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

    const backendUrl = import.meta.env.BACKEND_URL

    const [imageData, setImageData] = useState([])

    const getImageData = async () => {
        try {
            const res = await axios.get(`${backendUrl}/images`,{params});
            // console.log(res.data);
            // if (res.status === 200) {
                
            // }
        } catch (error) {
            console.error("Error fetching image data:", error);
        }

    }

    const value = {
        getImageData,
        imageData,
        setImageData,
        backendUrl
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;