import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class SplashScreen extends React.Component {

    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        setTimeout( () => {
            if (!this.props.isAuthenticated) {
                this.props.loginScreen()
            } else {
                this.props.mainScreen()
            }
        }, 1000)
    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    SPLASH
                </Text>
            </View>
        );
    }
 };

SplashScreen.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    loginScreen: PropTypes.func.isRequired,
    mainScreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
    loginScreen: () => { dispatch({type: 'Navigation/GOTO_LOGIN'}) },
    mainScreen: () => { dispatch({type: 'Navigation/GOTO_MAIN'}) },
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
