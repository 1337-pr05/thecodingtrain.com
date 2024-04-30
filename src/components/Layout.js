import React from 'react';
import { Slice } from 'gatsby';

import Head from './Head';

// fixes chunks order warnings
import '../styles/styles.module.css';

import '../styles/base.css';
import '../styles/variables.css';
import '../styles/fonts.css';

import * as css from './Layout.module.css';

const Layout = ({ children, title, description, image }) => {
  return (
    <div className={css.container}>
      <Head title={title} description={description} image={image} />
      <div className={css.content}>
        <Slice alias="TopBar" />
        {children}
        <Slice alias="Footer" />
      </div>
    </div>
  );
};

export default Layout;
