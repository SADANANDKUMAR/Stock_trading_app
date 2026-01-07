interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
}

export default function Toast({ message, type = "info" }: ToastProps) {
  const styles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`${styles[type]} text-white px-4 py-3 rounded-xl shadow-lg mb-3 min-w-[260px]`}
    >
      {message}
    </div>
  );
}
