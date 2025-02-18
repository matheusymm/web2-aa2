import Header from "../components/header";
import CourtsForm from "../components/courtsForm";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-300">
      <Header />
      <CourtsForm />
      <Footer />
    </div>
  );
};

export default Home;
