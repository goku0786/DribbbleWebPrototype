import Navbar from "./components/Header/Navbar";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div >
      <Navbar />
      <Body />
      <EmailVerificationPage />
      <Footer />
    </div>
  );
}

export default App;
