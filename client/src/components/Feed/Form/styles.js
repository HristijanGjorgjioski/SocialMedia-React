import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        border: '1px solid #ace8bc',
        padding: theme.spacing(2)
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    }
}));
