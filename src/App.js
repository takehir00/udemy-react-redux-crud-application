import React from 'react';
import './App.css';

// class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <label htmlFor="bar">bar</label>
//                 <input type="text" onChange={() => {
//                     console.log("I'm clicked!")
//                 }}/>
//             </React.Fragment>
//         )
//
//     }
// }

const App = () => {
    return (
        <div>
            <Cat/>
            <Cat/>
            <Cat/>
        </div>
    )
}

const Cat = () => {
    return <div>Meow!</div>
}

export default App;
