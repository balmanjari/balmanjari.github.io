import BalmanjariLogo from '../Logo/Balmanjari_logo-2.png';
// import BalmanjariLogo from '../Logo/Balmanjari logo.png';
import '../App.scss';
import '../Components.css';
import BhagavadGita from '../Images/BhagavadGita1.png';
import Shloka from '../Images/Shloka2.png';
import ReligiousBeliefs from '../Images/ReligiousBeliefs3.png';

function Home() {
    return (
        <div>
            <div className="banner">
                <div className="balmanjariLogo">
                    <img src={BalmanjariLogo} alt="Balmanjari" />
                    <span>Balmanjari</span>
                </div>
                <div>
                    <span className="heading" data-shadow='Sanskar Science &amp; Shlokas'>Sanskar Science &amp; Shlokas</span>
                </div>
            </div>
            <div className="homeContent">
                <p>
                    The concept of Balmanjari is Sanskar Science and Shlokas. It's an effort to teach children what is Sanatana Dharma is and that it's not a religion but science.
                </p>
                <div className="cards">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={BhagavadGita} alt="Bhagavad Gita" />
                                <h4><b>Bhagavad Gita</b></h4>
                            </div>
                            <div className="flip-card-back">
                                <h2>Bhagavad Gita</h2>
                                <p>Learn to recite Bhagavad Gita and their meaning</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Shloka} alt="Shlokas" />
                                <h4><b>Shlokas</b></h4>
                            </div>
                            <div className="flip-card-back">
                                <h2>Shlokas</h2>
                                <p>Learn to recite Karagre Shloka, Navagraha Stotra and many more and learn their meaning while doing so</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={ReligiousBeliefs} alt="Rituals and Religious Beliefs" />
                                <h4><b>Rituals</b></h4>
                            </div>
                            <div className="flip-card-back">
                                <h2>Rituals</h2>
                                <p>Learn to perform rituals and understand why they are done</p>
                            </div>
                        </div>
                    </div>                                                         
                </div>
            </div>
            {/* Below are Kids Classes details */}
        </div>
    );
}

export default Home;