import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ThemeEditor from '../tools/ThemeEditor';


const Home = () => {
    return (
        <Container>
          <div className="App">
            <Typography variant="h1">
              Hello World
            </Typography>
            <ThemeEditor />
          </div>
        </Container>
    )
}

export default Home;