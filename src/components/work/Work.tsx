import portfolio_movie from '../../video/portfolio_movie.mp4';
import '../../css/work/work.css'

export const Work = () => {
  return(
    <div className='work_container'>

      <div className='transition'>
        <h2 className='transition_work'>
          Hello World!!
        </h2>
      </div>

      <div className='video_container'>
        <div className='video_wrapper'>
          <video autoPlay loop muted >
            <source src={portfolio_movie} type="video/mp4" />
            <p>Your browser doesn't support HTML5 video.</p>
          </video>
        </div>
      </div>

      <div>
        <div>

        </div>
      </div>
    </div>
  );
}