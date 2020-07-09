import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet,useParams} from 'react-router-dom'
import Header from './Components/Header'

function App() {
  return (
    <div>
      <Header></Header>
      <h1>Want to try new shoes design? hit launch button below</h1>
      
      <Router>
<nav>
<Link to='/'>Home</Link> {'  '}
<Link to='launch'>Launch</Link>
</nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='launch' element={<Launch/>}>
          <Route path='/' element={<LaunchIndex/>} />
          <Route path=':slug' element={<LaunchShoe />} />
          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
      </Router></div>
  );
}
export default App;

function Home (){
  return <div>
    <h1>Welcome Home</h1>
  </div>
}

function Launch(){
  return <div>
    <h1>Welcome to Launch</h1>
    <Outlet/>
  </div>
}

function NotFound(){
  return <div>
    <h1>Page not Found</h1>
    
  </div>
}

function LaunchIndex(){
  return <ul>
{Object.entries(shoes).map(([slug,{name,img}])=><li key={slug}>
  <Link to={`/launch/${slug}`}>
  <h2>{name}</h2>
  <img src={img} alt={name} />
  </Link>
  </li>)}
  </ul>
}

function LaunchShoe(){
  const {slug} = useParams();
  const shoe = shoes[slug];
  if(!shoe) {return<h2>shoe not found</h2>}
  const {name,img} = shoe
  
  return <div>
    <h2>{name}</h2>
    <img src={img} alt={name}></img>
    
  </div>
} 

const shoes = {
  "Comfit - Men trendy":{
    name: "Comfit - Men",
    img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/864-3820-b_540x.jpg?v=1582879897"
  },
  "Marie-Claire women trendy":{
    name: "Marie-Claire women",
    img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/502-2018-b_540x.jpg?v=1576236814"
  },
  "Weinbrenner Men trendy":{
    name: "Weinbrenner Men",
    img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/863-3724-b_540x.jpg?v=1583389433"
  }
}

