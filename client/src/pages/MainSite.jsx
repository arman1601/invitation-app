import { Navbar } from "./Navbar";
import { AboutUs } from "./AboutUs";
import { Catalog } from "./Catalog";
import { CustomOffer } from "./CustomOffer";
import { Footer } from "./Footer";
import { PromoPage } from "./PromoPage";
import AnimatedBackground from "./AnimatedBackground";
import { InformationPage } from "./InformationPage";

const MainSite = () => {
    return (
        <>
            <Navbar />
            <main>
                {/* <section id="welcome"><WelcomePage /></section> */}
                <section><AnimatedBackground /></section>
                <PromoPage />
                <AboutUs />
                <InformationPage/>
                <Catalog />
                <CustomOffer />
            </main>
            <Footer />
        </>
    );
};

export default MainSite;