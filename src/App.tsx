import './App.css'
import Header from "./components/Header.tsx";
import GlobalStyles from "./Globalstyles.ts";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import Article from "./components/Article.tsx";
import Article2 from "./components/Article2.tsx";

function App() {


    return (
        <>
            <GlobalStyles/>
            <Header/>
            <Nav/>
            <main>
                <Article/>
                <Article2/>
            </main>
            <Footer/>
        </>
    )
}

export default App
