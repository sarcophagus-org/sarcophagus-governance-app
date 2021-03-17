import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/header";
import AppWrapper from "./components/layout/AppWrapper";


const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Body />
      <Footer />
    </AppWrapper>
  );
}

export default App;
