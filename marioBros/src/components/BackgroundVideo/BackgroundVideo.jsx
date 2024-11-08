import './BackgroundVideo.css'

export default function BackgroundVideo() {
    return (
        <div className='video-container'>
            <video className="video" autoPlay loop muted playsInline>
                <source src="/bg.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
            <div className="bg-opacity"></div>
        </div>
    )
}