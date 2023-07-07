
const VideoItem = ({title, duration, uploadDate, description}) => { // we can use destructuring for extract the properties 
    const seconds = duration % 60;
    const minutes = Math.floor(duration / 60); // modify the paramatter recived and process the info
    return (
        <div>
            <h3>{ title }</h3>
            <div> 
                <span>{`${minutes} : ${seconds}`}</span> {/* we put the constants with data processed */}
                <span>{uploadDate.toLocaleDateString()}</span> 
            </div>
            <p>{description}</p>{/* we can put directly the name properties  */}
        </div>);
}

export default VideoItem;