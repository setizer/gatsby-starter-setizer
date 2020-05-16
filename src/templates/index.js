import React from "react";
import { Link } from "gatsby";

import { Button } from 'antd';

import Layout from "../components/layout";

const IndexPage = props => {    
    const {pageContext} = props;
    
    return (
        <Layout {...props}>    
            <h1>Hi people,</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>

            {/* GROUPS LINK LANGUAGES */}
            <Button>
                <Link to="/en">English</Link>
            </Button>
            <Link to="/fr">French</Link>
        </Layout>
    );
}

export default IndexPage
