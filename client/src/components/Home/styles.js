import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        marginTop: '10px'
    },
    sidebar: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    mobile: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    desktop: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}))
