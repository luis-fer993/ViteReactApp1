import { Fragment } from 'react';
import VideoItem from './components/VideoItem';
import VideoList from './components/VideoList';


const App = (props) => ( // convert the main root tag NOt recommended pass props for Root tag  
    <Fragment> {/* Fragment is tag that allow us to create more components  */}
        <VideoList title={'Lista Videos Comp1'}>
            <VideoItem
                title='comp video1'
                duration={2798}
                uploadDate={new Date(2022, 1 - 1, 20)}
                description={'desc comp vide 1'}
            ></VideoItem>
        </VideoList>
            <VideoList title={'Lista Videos Comp1'}>
            <VideoItem
                title='comp video1'
                duration={2798}
                uploadDate={new Date(2022, 1 - 1, 20)}
                description={'desc comp vide 1'}
            ></VideoItem>
        </VideoList>
        <VideoList title={'Lista Videos vacia'}>
        </VideoList>
    </Fragment>
    
);

export default App;