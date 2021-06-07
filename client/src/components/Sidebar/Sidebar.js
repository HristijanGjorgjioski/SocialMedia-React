import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardActionArea, CardMedia, Button, Typography, CardContent } from '@material-ui/core';

import useStyles from './styles';

const Sidebar = () => {
    const classes = useStyles();
    const [text, setText] = useState({ text: 'Never give up on your dreams!' });
    const [image, setImage] = useState('https://source.unsplash.com/random');

    const onButtonClick = async () => {
        const url = 'https://type.fit/api/quotes';
        const response = await axios.get(url);
        const data = response.data;
        let randomNumber = Math.round(Math.random() * 1000);
        setText(data[randomNumber]);
        return setImage(`https://source.unsplash.com/random/${randomNumber}`);
    }   

    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia component="img" alt="Fact Image" height="140" title="Fact Image" image={image} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">QUOTE</Typography>
                        <Typography variant="subtitle1" component="p">
                            {text.text}
                        </Typography>
                        <Typography color="textSecondary" component="p">
                            {text.author}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Button className={classes.button} variant="contained" color="primary" onClick={() => onButtonClick()}>GENERATE QUOTE</Button>
            </Card>
        </div>
    )
}

export default Sidebar;
