import left from '../img/arrow-left.png';
import right from '../img/right-arrow.png';
import './Btn.css';
import './Arrows.css';
import './Top.css';

function Top() {
    return (
            <section className="container">
                <div className="row">
                    <div className="col-md-12 top">
                        <div className="arrows">
                            <img className="arrows" src={left} alt="Left-arrow" />
                            <img className="arrows" src={right} alt="Right-arrow" />

                        </div>

                        <a class="btn" href="#">Finish Sprint</a>
                </div>

                <div className="col-md-12 next-row">
                        <h1>Sprint overview</h1>

                        <a class="btn white" href="#">Last Sprint</a>
                </div>


            </div>
        </section>
        );
    }
    
    export { Top };


