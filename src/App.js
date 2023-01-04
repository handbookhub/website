import React from "react"
import "./App.sass"
import {Layout} from "antd"
import {BrowserRouter as Router} from "react-router-dom"
import { Routes, Route, topbar } from "react-router-loading"
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
                            <Route exact path="/" element={<Home/>} loading/>
                            <Route path="/:category" element={<Articles/>} loading/>
                            <Route path="/:category/:articleId" element={<Article/>} loading/>
                        </Routes>
                    </Layout>
                    <Footer/>
                </Router>
            </Layout>
        </div>
    )
}

topbar.config({
    autoRun: true,
    barThickness: 3,
    barColors: {
        0: "#1677ff",
        1.0: "#1677ff"
    },
    className: "topbar"
})

export default App
