import './Statistic.css';
import velocity from '../img/velocity.png';
import teammembers from '../img/team-members.png';
import task from '../img/portfelis.png';
import spikes from '../img/looking.png';

function Statistic() {
    return (
            <section className="container">
                <div className="row">
                    <div className="col-md-12 statistic-father">
                        <div className="block">
                            <img className="statistic-img" src={velocity} alt="Team velocity" />
                            <div className="statistic-text"> 
                                <p className="statistic-title" >Team velocity</p>
                                <p className="statistic-number" >52</p>
                            </div>


                        </div>

                        <div className="block">
                            <img className="statistic-img" src={teammembers} alt="Team members" />
                            <div className="statistic-text"> 
                                <p className="statistic-title" >Team members</p>
                                <p className="statistic-number" >12</p>
                            </div>


                        </div>

                        <div className="block">
                            <img className="statistic-img" src={task} alt="Team velocity" />
                            <div className="statistic-text"> 
                                <p className="statistic-title" >Task delivered</p>
                                <p className="statistic-number" >23</p>
                            </div>


                        </div>

                        <div className="block">
                            <img className="statistic-img" src={spikes} alt="Team velocity" />
                            <div className="statistic-text"> 
                                <p className="statistic-title" >Spikes delivered</p>
                                <p className="statistic-number" >16</p>
                            </div>


                        </div>

                        <div className="block">
                            <img className="statistic-img" src={velocity} alt="Team velocity" />
                            <div className="statistic-text"> 
                                <p className="statistic-title" >New events</p>
                                <p className="statistic-number" >15</p>
                            </div>


                        </div>

                       

                       


                    </div>
                        
            </div>
        </section>
        );
    }
    
    export { Statistic };


