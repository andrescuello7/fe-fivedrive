import axios from "axios";

export default function UploadMethod() {
    const UploadSend = async (e: any) => {
        try {
            const pic = e.target.files[0];
            const formData = new FormData();
            formData.append("file", pic);
            formData.append("upload_preset", "wkuf5yo4");
            const { data } = await axios.post("https://api.cloudinary.com/v1_1/five-drive/upload", formData);
            return data.url;
        } catch (error) {
            console.log({ error });
        }
    }
    return {
        UploadSend
    };
};