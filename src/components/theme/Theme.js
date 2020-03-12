import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';


const Theme = (props) => {
    const { style, children } = props;

    let themeStyles = createMuiTheme({
        palette: {
            type: style.type,
            primary: {
                main: style.primaryColor
            },
            secondary: {
                main: style.secondaryColor
            }
        }
    });

    let theme = responsiveFontSizes(themeStyles);
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
                {children}
            </div>
        </ThemeProvider>
    )
}


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

const mapStateToProps = (state, ownProps) => ({
    style: state.theme.theme,
    children: ownProps.children
})

Theme.propTypes = {
    style: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Theme)
