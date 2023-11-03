import LoginProvider from "@/components/LoginProvider";

export const metadata = {
  title: "Login | Md Najmul Hossen",
  description: "Login page for Md Najmul Hossen",
};

const LoginPage = () => {
  return (
    <div className="container p-5 min-h-[calc(100vh-220px)] grid place-items-center">
      <LoginProvider />
    </div>
  );
};

export default LoginPage;
