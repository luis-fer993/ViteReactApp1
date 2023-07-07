import { Fragment } from 'react';
import VideoItem from './components/VideoItem';
import VideoList from './components/VideoList';
// import './App.css' we need to modularizy th css to mitigate the repetitions of name class, and possibles issues 
// our css files need to have the following name structure [namefile].module.css
// we import a object from the styles file and use in the component
import AppStyles from './App.module.css';

const App = (props) => ( // convert the main root tag NOt recommended pass props for Root tag  
    <Fragment> {/* Fragment is tag that allow us to create more components  */}
        <div className={AppStyles.container}> {/* we access to class style with point notation .  */}       
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
        </div>
    </Fragment>
    
);

export default App;