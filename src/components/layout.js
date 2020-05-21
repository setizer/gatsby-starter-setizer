import React from "react";
import PropTypes from "prop-types";

import {ConfigProvider} from "@setizer/ui";

import SEO from "./seo";

const Layout = props => {
    const {children, pageContext} = props;
    
    console.log("props layout", pageContext);

    return (
      <ConfigProvider>
        <SEO {...props} />
        <main>{children}</main>
      </ConfigProvider>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;