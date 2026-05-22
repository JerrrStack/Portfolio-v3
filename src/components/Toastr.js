import { ToastContainer } from "react-toastify";

export function AppToaster() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
      toastStyle={{
        background: "#141c2b",
        color: "#f1f5f9",
        border: "1px solid rgba(34, 211, 238, 0.35)",
      }}
    />
  );
}
