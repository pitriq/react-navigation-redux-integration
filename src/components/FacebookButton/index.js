import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const FacebookButton = ({ onPress }) => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
            onPress={onPress}
        >
            <View style={styles.buttonContent}>
                <FontAwesome name="facebook" size={24} color="#fff" style={styles.icon}/>
                <Text style={styles.buttonText}>{'Log in with Facebook'}</Text>
            </View>
        </TouchableOpacity>
    </View>
);

FacebookButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default FacebookButton
