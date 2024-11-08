import './RightImage.css'

export default function RightImage( { className } ) {
    return (
        <div className={`image-container ${className}`}>
            <figure>
                <img src="/mario.png" alt="mario e luidi" />
            </figure>
        </div>


    )
}