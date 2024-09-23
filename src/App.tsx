import './App.css'
import Header from "./components/Header.tsx";
import GlobalStyles from "./Globalstyles.ts";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./About.tsx";
import ArticleAll from "./components/ArticleAll.tsx";
import articles from "./assets/data.ts";


function App() {


    return (
        <>
            <Router>
                <GlobalStyles/>
                <Header/>
                <Nav/>
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    {articles.map((article, index) => (
                                        <ArticleAll
                                            key={index}
                                            headline={article.headline}
                                            description={article.description}
                                        />
                                    ))}
                                </>
                            }
                        />
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </main>
                <Footer/>
            </Router>
        </>
    )
}

export default App


