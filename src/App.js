import './App.css';
import NumbersList from './NumbersList';



function Cya(props) {
    return <h1>Cya, from {props.someName}</h1>
}

const HelloMessage = (props) => <div>Hello, {props.name}!</div>


function Greeting(props) {
    return (
        <div>
        {props.isLoggedIn ? <HelloMessage name={props.name}/> : <Cya someName={props.name}/> }
        </div>
    )
}


const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2); 
console.log(doubled); 
// [2, 4, 6, 8, 10]

const apiUrl = '...';
export const getData = () => {
return fetch(apiUrl)
.then(res => res.json())
.then(data => data.results)
.catch(error => console.error(error))
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Universe!~</h1>
        <ul>
         <NumbersList numbers={numbers}/>  
        {/* {numbers.map( num => {
          return <li key={Math.random}>{num * 4} </li>
        })} */}
        </ul>
       
        <Greeting isLoggedIn={true} name="Nathan"/>
      </header>
    </div>
  );
}

export default App;

