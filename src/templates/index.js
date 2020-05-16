import React from "react";
import { Link } from "gatsby";

import { Button } from 'antd';

import App from "../components/app";
import SEO from "../components/seo";

const IndexPage = props => {    
    const {pageContext} = props;

    return (
        <App>
            <SEO title={pageContext.title} lang={pageContext.currentLanguage} />
            
            <h1>Hi people,</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>

            {/* GROUPS LINK LANGUAGES */}
            <Button>
                <Link to="/en">English</Link>
            </Button>
            <Link to="/fr">French</Link>
        </App>
    );
}

export default IndexPage
