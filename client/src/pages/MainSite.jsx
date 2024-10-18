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
                <section id="main"><AnimatedBackground /></section>
                <section><PromoPage /></section>
                <InformationPage />
                <section id="about"><AboutUs /></section>
                <section id="catalog"><Catalog /></section>
                <section id="contacts"><CustomOffer /></section>
            </main>
            <Footer />
        </>
    );
};

export default MainSite;