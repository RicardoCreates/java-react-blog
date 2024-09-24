import './App.css'
import Header from "./components/Header.tsx";
import GlobalStyles from "./Globalstyles.ts";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import About from "./About.tsx";
import Startpage from "./components/Startpage.tsx";
import ArticleCard from "./components/ArticleCard.tsx";
import Character from "./components/Character.tsx";
import Nav2 from "./components/Nav2.tsx";


function App() {


    return (
        <>
            <Router>
                <GlobalStyles/>
                <Header/>
                <Nav/>
                <main>
                    <Routes>
                        <Route path={"/"} element={<Startpage/>}/>
                        <Route path={"/article"} element={<ArticleCard/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path={'/character/:id'} element={<Character />} />
                    </Routes>
                </main>
                <Nav2/>
                <Footer/>
            </Router>
        </>
    )
}

export default App


