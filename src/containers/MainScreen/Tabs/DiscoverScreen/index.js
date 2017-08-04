import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './styles';


class DiscoverScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(nextProps) {
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                  {this.props.navigation.state.routeName}
                </Text>
            </View>
        )
    }
}

DiscoverScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

DiscoverScreen.navigationOptions = {
    title: 'Discover',
};

export default DiscoverScreen;
