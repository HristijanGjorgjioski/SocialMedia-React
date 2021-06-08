import React, { useContext, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core';
import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';
import { MainContext } from '../../../context/context';

const Posts = ({ setCurrentId }) => {
    const { posts, getPosts } = useContext(MainContext);
    const classes = useStyles();

    const user = JSON.parse(localStorage.getItem('user'));
    const { deletePost } = useContext(MainContext);

    const onButtonDelete = (id) => {
        deletePost(id);
    }

    useEffect(() => {
        getPosts();
    }, [posts]);

    return (
                <div>
                    {!posts?.length ? <CircularProgress /> : (
                        posts?.map((p, index) => (
                            <div key={index}>
                                <Paper className={classes.paper}>
                                    <Card className={classes.card}>
                                        <Typography variant="h6" color="textPrimary">{p.name}</Typography>
                                        <Typography variant="p" component="p" color="textSecondary">{moment(p.createdNow).fromNow()}</Typography>
                                        <CardMedia className={classes.image} component="img" image={p.photo || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={'Image'} />
                                        <CardContent>
                                            <Typography variant="h6">{p.description}</Typography>
                                        </CardContent>
                                        {(user?.data?.result._id === p.creator) && (
                                            <CardActions>
                                                <Button size="small" color="primary"><MoreHorizIcon /></Button>
                                                <Button size="small" color="secondary" onClick={() => onButtonDelete(p._id)}><DeleteIcon /></Button>
                                            </CardActions>
                                        )}
                                    </Card>
                                </Paper>
                            </div>
                        ))
                    )}
                </div>
    )
}

export default Posts;
