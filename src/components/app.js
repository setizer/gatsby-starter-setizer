import React from "react";
import PropTypes from "prop-types";

import { useStaticQuery, graphql } from "gatsby";

import 'antd/dist/antd.less';

const App = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    console.log("data", data);
  
    return (
      <>
        <h1>{data.site.siteMetadata.title}</h1>
        <main>{children}</main>
      </>
    )
};

App.propTypes = {
    children: PropTypes.node.isRequired,
};

export default App;