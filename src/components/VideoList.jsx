import styles from './VideoList.module.scss'

const VideoList = ({ title, children }) => {
    const video = children || <p>No hay videos </p> // Establish the  content if theris'nt children tag 
    return (
    <div className={`${styles['wrapper-List']} ${styles.bgcol}`}> {/* if the name of property style have special characters, 
    we can acces by object[' name ']
    
    If we need to add more tha 1 class we can use the ` ${var1} ${var2}`
    */}
            <h1>{title}</h1>
            {video}
    </div> );
}

export default VideoList;