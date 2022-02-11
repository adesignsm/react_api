// import React from "react";


// class PersonList extends React.Component {

//     state = {
//         people: [],
//         show: false,
//     }

//     componentDidMount() {

//         axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
//             const persons = response.data;
//             this.setState({persons});
//         });
//     }

//     showData() {

//         this.setState({
//             show: false
//         });
//     }

//     render() {

//         return (
//             <ul>
//                 {this.state.persons?.map(person => <li key = {person.id}> {person.name} </li>)}
//             </ul>
//         )
//     }
// }

// export default PersonList;

