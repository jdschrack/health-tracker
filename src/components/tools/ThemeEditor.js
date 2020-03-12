import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setDarkMode } from '../../redux/actions/themeActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export const ThemeEditor = (props) => {
    const handleClick = () => {        
        if (props.style.type === 'dark') {
            props.setDarkMode('light');
        } else {
            props.setDarkMode('dark')
        }
    }

    return (
        <>
            <Paper variant="elevation">
                <Typography variant="h3">Theme Configuration</Typography>
                <Button onClick={() => handleClick()} variant="contained" color="primary">
                    {props.style.type === 'dark' ? "light" : "dark"}
                </Button>
            </Paper>
        </>
    )
}

const mapStateToProps = (state, ownProps) => ({
    style: state.theme.theme
})

const mapDispatchToProps = {
    setDarkMode
}

ThemeEditor.propTypes = {
    style: PropTypes.object.isRequired,
    setDarkMode: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeEditor)
