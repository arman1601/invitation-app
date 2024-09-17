import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { WelcomePage } from "./WelcomePage";
import { AboutUs } from "./AboutUs";
import { Catalog } from "./Catalog";
import { CustomOffer } from "./CustomOffer";
import { Footer } from "./Footer";

const MainSite = () => {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <section id="welcome"><WelcomePage /></section>
                <section id="about"><AboutUs /></section>
                <section id="catalog"><Catalog /></section>
                <section id="contacts"><CustomOffer /></section>
            </main>
            <Footer />
        </>
    );
};

export default MainSite;