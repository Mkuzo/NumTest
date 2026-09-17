import travel from './../assets/travel.jpg'
import Header from './header'
export default function Banner(){
    return(
        <div>
            <div className="banner-container">
                    <img src={travel} alt="" />
                    <div className="cover">
                        <Header></Header>
                        <div className="description">
                            <div className="text-container">
                                <h1>Let's Find Your Next Adventure</h1>
                                <p>Small-group tours takes, volcanoes and island chains,led by guides who grew up there. You bring the curiosity;we handle the rest</p>
                                <button>Take Tour</button>
                            </div>
                            <div className="form-container">
                                <ul>
                                    <span><li>Tour</li></span>
                                    <li>Flight</li>
                                    <li>Hotels</li>
                                </ul> 
                                <h2>Destination</h2>
                                <div className="input">
                                    <p>Mount Bromo,Indonesia</p>    
                                </div>
                                <h2>Guest</h2> 
                                <div className="input">
                                    <p>4 People</p>
                                </div>
                                <div className="button">
                                    <button>Reserve</button>
                                </div>
                            </div>                            
                        </div>
                    </div>
            </div>
        </div>
    )
}