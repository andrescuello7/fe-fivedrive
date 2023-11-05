import axios from "axios";

export default function UploadMethod() {
    const UploadSend = async (e: any) => {
        try {
            const pic = e.target.files[0];
            const formData = new FormData();
            formData.append("file", pic);
            formData.append(`${process.env.NEXT_PUBLIC_API_CLOUDINARY_TOKEN_KEY}`, `${process.env.NEXT_PUBLIC_API_CLOUDINARY_TOKEN}`);
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_CLOUDINARY}`, formData);
            return data.url;
        } catch (error) {
            console.log({ error });
        }
    }
    return {
        UploadSend
    };
};