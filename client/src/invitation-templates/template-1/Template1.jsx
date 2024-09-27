import Header from './components/header/Header';
import Overview from './components/overview/Overview';
import Details from './components/details/Details';
import RSVP from './components/rsvp/RSVP';
import Timer from './components/timer/Timer';
import './template1.css';
import './icons/css/all.min.css'
import Footer from '../common/footer/Footer';

const Template1 = () => {
    return (
        <div className='template1'>
            <Header />
            <Timer eventDate={'2024-10-5'}/>
            <Overview />
            <h2>The Details</h2>
            <div className='template1-couples-home'>
            </div>
            <div className='template1-geo'>
                <Details iconClass="fa-map-marked-alt" heading="ekexeci" putImage={true}> 
                    <p>January 1, 2020</p>
                </Details>
                <Details  putImage={true} heading="Location">
                    <p><a href="#">Grand Venue Place</a>, City, State</p>
                </Details>
            </div>
            <Details iconClass='fas fa-asterisk' heading={'OTHER NOTES'} 
                text={'Cake dessert mother guitar acoustic bass cheers, uncle joe seat covers guitar acoustic bass macarena seat covers cake dessert embarrassing.Also, your presence is the only present we desire. No gift required.'}>
                        
            </Details>
            <RSVP />
            <Footer />
        </div>
    );
};

export default Template1;
