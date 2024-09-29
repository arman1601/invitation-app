import './overlayVideo.css';

const OverlayVideo = ({handleButtonClick}) => {
    return (
        <div className='video-overlay'>
            <video autoPlay muted loop className='video-background'>
                <source src='/src/invitation-templates/template-1/media/video.MP4' type='video/mp4'/>
                Your browser dont support the video tag.
            </video>
            <img onClick={handleButtonClick} className='enter-button'/>
        </div>
    );
};

export default OverlayVideo;