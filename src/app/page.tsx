
import Footer from "../components/ui/footer";
import NavUI from "../components/ui/nav-bar";
import HomePageParallax from "../components/pages/heropage/page";
import ObjectivePage from "../components/pages/objectivepage/page";
import { VisionBoard } from "@/components/ui/visionboard";
export default function Home() {
  return (
    <>
      <NavUI></NavUI>
      <HomePageParallax></HomePageParallax>
      <br></br>
      <VisionBoard></VisionBoard>
      
      <br></br>
      <ObjectivePage></ObjectivePage>
      
      <br></br>
      <Footer></Footer>
    </>
  );
}
