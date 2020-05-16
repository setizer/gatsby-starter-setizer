import React from "react";
import PropTypes from "prop-types";

import { useStaticQuery, graphql } from "gatsby";

import SEO from "./seo";

import 'antd/dist/antd.less';

const Layout = props => {
    const {children, pageContext} = props;
    
    console.log("props layout", pageContext);
  
    return (
      <>
        <SEO {...props} />
        <main>{children}</main>
      </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;