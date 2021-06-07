import React from 'react'
import { Grid, Container } from '@material-ui/core';

import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed';
import Search from '../Search/Search';

import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    return (
        <div> 
            <Navbar />
            <Container className={classes.container}>
                <Grid container justify="space-between" alignItems="stretch" spacing={0}>
                    <Grid className={classes.sidebar} sm={2} item>
                        <Sidebar />
                    </Grid>
                    <Grid className={classes.desktop} item sm={3} xs={6} style={{border: '1px solid black'}}>
                        <Search />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Feed />
                    </Grid>
                    <Grid className={classes.mobile} item sm={3} xs={6} style={{border: '1px solid black'}}>
                        <Search />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home
