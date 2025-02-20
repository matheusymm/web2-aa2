import Header from "../components/header";
import SignupForm from "../components/signupForm";
import Footer from "../components/footer";

const Signup = () => {
  return (
    <div className="min-h-screen bg-slate-300 flex flex-col">
      <Header />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default Signup;
