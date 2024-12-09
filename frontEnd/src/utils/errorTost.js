import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const errorTost=(errorMessage)=>{
    toast.error(`${errorMessage}!`, {
        position: "top-right",
        autoClose: 10001,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
}

