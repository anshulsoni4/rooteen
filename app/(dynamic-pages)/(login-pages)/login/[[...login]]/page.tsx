import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div className="flex justify-center py-24">
      <SignIn />
    </div>
  );
};
export default LoginPage;

