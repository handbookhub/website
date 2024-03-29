import React from "react"
import {Link, useLocation} from "react-router-dom"
import {Breadcrumb} from "antd"
import PropTypes from "prop-types"
import {toRegularCase} from "../../utils/string"
import "./index.sass"


function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
        <span>{route.breadcrumbName}</span>
    ) : (
        <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
    )
}

function getBreadcrumbName(item) {
    if(item === "") {
        return "Home"
    }

    return toRegularCase(item)
}

function BreadcrumbDefault({classname}) {
    const location = useLocation()
    let routes

    if(location.pathname === "/") {
        routes = [{
            path: location.pathname,
            breadcrumbName: getBreadcrumbName("")
        }]
    } else {
        routes = location.pathname.split("/").map((item, i) => ({
            path: `${location.pathname.split("/").splice(0, i + 1).join("/")}`,
            breadcrumbName: getBreadcrumbName(item)
        }))
    }

    return (<Breadcrumb className={classname} itemRender={itemRender} routes={routes} separator=">"/>)
}

BreadcrumbDefault.propTypes = {
    classname: PropTypes.string
}

export {BreadcrumbDefault}