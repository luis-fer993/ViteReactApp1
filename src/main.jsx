import ReactDOM from 'react-dom'
import './main.css'
import App from './App';

// ---- sec 1
const var1 = 'data';
function fun1() {
    return 'data1'
}

const Title = props => {
    return <h1 style={{
        color: 'blue' // The style html tag is now a object 
    }} className='tittle'>desarrollo {var1 + ' ' + fun1()+' --props--> '+props.texto}</h1>
    // the properties of the elment have to do in Cammel Case
    // the children properies cn be accesed on {props.children }
}
const ComponentTitle = (<div>
    <Title texto='data from props'> data as a children </Title> 
</div>);

// ---end sec 1


const cont = document.getElementById('root')

ReactDOM.render(<App />, cont)
