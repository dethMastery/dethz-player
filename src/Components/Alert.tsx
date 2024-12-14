import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const AlertFunction = (isSuccess: boolean, message: string) => {
  withReactContent(Swal).fire({
    title: isSuccess ? "Success" : "Error / Warning",
    text: message,
    icon: isSuccess ? "success" : "error",
    confirmButtonText: "okay",
  });
};
