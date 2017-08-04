import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import FacebookButton from '../../components/FacebookButton';
import { loginFacebook } from '../../actions/auth';
import styles from './styles';

// TODO try changing this to stateful component
class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isAuthenticating: this.props.isAuthenticating,
            errorCode: this.props.errorCode,
            errorObject: this.props.errorObject,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isAuthenticating: nextProps.isAuthenticating,
            errorCode: nextProps.errorCode,
            errorObject: nextProps.errorObject,
        })
    }

    render () {
        return (
            <View style={styles.container}>
                { this.state.isAuthenticating && <ActivityIndicator />}
                { !this.state.isAuthenticating &&
                <FacebookButton onPress={ () => this.props.loginFacebook('dummy') } />
                }
            </View>
        )
    }
}

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
    loginFacebook: PropTypes.func.isRequired,
};

LoginScreen.navigationOptions = {
    header: null,
};

const mapStateToProps = state => ({
    isAuthenticating: state.auth.isAuthenticating,
    errorCode: state.auth.errorCode,
    errorObject: state.auth.errorObject,
});

const mapDispatchToProps = dispatch => ({
    loginFacebook: bindActionCreators(loginFacebook, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
