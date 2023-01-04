import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import PropTypes from "prop-types"
import {Divider, Typography} from "antd"
import {Link} from "react-router-dom"
import "./index.sass"

function Markdown({markdown}) {
    return (
        <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]} components={{
            h1: ({level, children}) => <><Typography.Title level={level}>{children}</Typography.Title><Divider/></>,
            h2: ({level, children}) => <><Typography.Title level={level}>{children}</Typography.Title><Divider/></>,
            h3: ({level, children}) => <Typography.Title level={level}>{children}</Typography.Title>,
            h4: ({level, children}) => <Typography.Title level={level}>{children}</Typography.Title>,
            h5: ({level, children}) => <Typography.Title level={level}>{children}</Typography.Title>,
            a: ({node, children}) => <Link to={node.properties.href} component={Typography.Link}>{children}</Link>,
            p: ({children}) => <Typography.Text>{children}</Typography.Text>,
            hr: () => <Divider/>
        }}>
            {markdown}
        </ReactMarkdown>
    )
}

Markdown.propTypes = {
    markdown: PropTypes.string
}

export {Markdown}
