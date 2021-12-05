import React, { memo } from 'react';
import { Container, Grow } from '@material-ui/core';

import Home from './screens/Home';

const App = () => {
  return (
    <Container maxWidth="lg">
      <Grow in>
        <Home />
      </Grow>
    </Container>
  );
};

export default memo(App);
