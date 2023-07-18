import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

// function Nav() {
//     return (
//         <nav>
//             <h1>
//                 This is nav!
//             </h1>
//         </nav>
//     )
// }

// function Main() {
//     return (
//         <h1>
//             This is main!
//         </h1>
//     )
// }

// // Declarative v. Imperative -- declaritive is more efficient
// const h1 = document.createElement("h1");
// h1.textContent = "Hello World!!";
// const dec = document.getElementById('dec');
// dec.appendChild(h1)


// ReactDOM.render(
//     <div>
//         <Nav />
//         <Main />
//     </div>,
//     document.getElementById('root')
// )

// const element = <h2 className="header">This is JSX</h2>


// function Nav() {
//     return (
//         <nav>
//             <h1>
//                 website
//             </h1>
//             <ul>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>        
//     )
// }

// const nav =  (
//     <nav>
//         <h1>
//             website
//         </h1>
//         <ul>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>        
// )


// ReactDOM.render(
//     nav
//     , document.getElementById('root')
// )

// const body = (
//     <body>
//         <h1>This is how we do</h1>
//         <li>
//             <ul>
//                 this
//             </ul>
//             <ul>
//                 is
//             </ul>
//             <ul>
//                 how
//             </ul>
//         </li>
//     </body>
// )

// const root = document.getElementById("root")
// root.append(JSON.stringify(body))


// React 18 implementation
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(nav)



// const root = document.getElementById('root')

// function Header() {
//     return (
//         <h1>
//             Fun Facts about React
//         </h1>
//     )
// }

// function Body() {
//     return (
//         <body>
//             <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//                 <li>4</li>
//                 <li>5</li>
//             </ul>
//         </body>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Header />
//         <Body />
//     </div>,
//     root
// )

const root = document.getElementById('root')
ReactDOM.render(
    <div>
        <Header />
        <Title />
        <Main />
        <Footer />
    </div>, root)