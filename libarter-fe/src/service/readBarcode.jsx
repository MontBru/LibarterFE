import axiosInstance from "../axios/axiosInstance";

const readBarcode = async (image) => {
    const response = await axiosInstance.post(`user/barcode/readBarcode`, {
        image
    });

    if(response.status === 200)
        return await response.data;
    else 
        return null;
}
 
export default readBarcode;