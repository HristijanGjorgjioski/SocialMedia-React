import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4)
    },
    card: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        border: '1px solid #ace8bc',
        padding: theme.spacing(1)
    },
    image: {
        width: '100%',
        height: 'auto'
    }
}));
