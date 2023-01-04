import React from "react"
import "./App.sass"
import {Layout} from "antd"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {BreadcrumbDefault} from "./components/Breadcrumb"
import {Home} from "./pages/Home"
import {Articles} from "./pages/Articles"
import {Article} from "./pages/Article"


function App() {
    return (
        <div className="page">
            <Layout>
                <Router>
                    <Header/>
                    <Layout>
                        <BreadcrumbDefault classname="breadcrumb"/>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/articles" element={<Articles/>}/>
                            <Route path="/articles/:articleId" element={<Article/>}/>
                        </Routes>
                    </Layout>
                    <Footer/>
                </Router>
            </Layout>
        </div>
    )
}

export default App
