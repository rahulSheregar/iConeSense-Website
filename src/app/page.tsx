
import Footer from "./components/ui/footer";
import NavUI from "./components/ui/nav-bar";
import HomePageParallax from "./pages/heropage/page";
import NewsUI from "./pages/newsbox/page";
import ObjectivePage from "./pages/objectivepage/page";

export default function Home() {
  return (
    <>
      <NavUI></NavUI>
      <HomePageParallax></HomePageParallax>
      <br></br>
      <ObjectivePage></ObjectivePage>
      <br></br>
      <Footer></Footer>
    </>
  );
}
