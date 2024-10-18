import './overlayVideo.css';

const OverlayVideo = ({ handleButtonClick }) => {
  return (
    <div className='video-overlay'>
        <video autoPlay muted loop className='video-background'>
            <source src='/src/invitation-templates/template-1/media/video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
        </video>
       <img 
            onClick={handleButtonClick} 
            className='enter-button' 
            alt='Enter Button' 
            src='/src/invitation-templates/template-1/media/play.svg' 
        />
    </div>
  );
};

export default OverlayVideo;
