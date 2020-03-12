import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setRedirect } from '../../redux/actions/authenticationActions';

const VerifyLogin = (props) => {
    let history = useHistory();
    const { currentURL } = props;

    if (!props.isAuth) {
        console.log(props);
        props.setRedirect(currentURL ?? "/");
        history.push("/login");
    }

    return (
        props.isAuth ? props.myProps.children : null
    )
}

const mapStateToProps = (state, ownProps) => ({
    myProps: ownProps,
    //currentURL: ownProps.location.pathname,
    isAuth: state.authStatus.authData.isAuthorized
});

export default connect(mapStateToProps, { setRedirect })(VerifyLogin);
