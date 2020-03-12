import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
    },
    paper: {
        marginTop: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

const NotFound = props => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Card>
                <CardHeader
                    title={"That wasn't Supposed To Happen!"}
                    titleTypographyProps={{ align: 'center' }}
                />
                <CardContent>
                    <Typography variant="h1" align="center">Whoops!</Typography>
                    <Typography variant="h4" align="center">Error: 404 Not Found</Typography>
                </CardContent>
                <CardActions>
                    <Button component={Link} to="/" variant="contained" color="primary">
                        Home
                  </Button>
                </CardActions>
            </Card>
        </Container>
    )
}

NotFound.propTypes = {

}

export default NotFound
