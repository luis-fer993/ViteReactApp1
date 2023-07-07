const VideoList = ({title, children}) => {
    const video = children || <p>No hay videos </p> // Establish the  content if theris'nt children tag 
    return (
    <div>
            <h1>{title}</h1>
            {video}
    </div> );
}

export default VideoList;