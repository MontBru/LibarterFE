import axiosInstance from "../axios/axiosInstance";

const readBarcode = async (image) => {
    try{
        const response = await axiosInstance.post(`user/barcode`, {
            image
        });
        return await response.data;
    }
    catch{
        return null;
    }
}
 
export default readBarcode;