import React from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

state = {
	username: '',
	password: ''
}

handleChange = (e) => {
	this.setState({
		[e.target.id] : e.target.value
	})
}

newState = () => {
	this.state;
}

const LoginDetails = (props) => (
	<View>
		<View style={styles.Container1}>
			<TextInput onChange={this.handleChange}
				style={{ paddingLeft: 10, fontSize: 18, color: '#2d707d' }}
				placeholder={props.placeHolder}
				id="username"
				placeholderTextColor="#2d707d"
			/>
			<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
				<Text style={{ textAlign: 'right', marginRight: 9, fontSize: 18, color: '#2d707d' }}> | </Text>
				<Image source={{ uri: 'https://png.pngtree.com/svg/20160906/this_is__login_username_544548.png' }} style={{ width: 20, height: 20, marginRight: 15 }} />
			</View>
		</View>
		<View style={styles.Container2}>
			<TextInput onChange={this.handleChange}
				style={{ paddingLeft: 10, fontSize: 18, color: '#2d707d' }}
				placeholder="Password"
				id="password"
				placeholderTextColor="#2d707d"
				secureTextEntry
			/>
			<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
				<Text style={{ textAlign: 'right', marginRight: 9, fontSize: 18, color: '#2d707d' }}> | </Text>
				<Image source={{ uri: 'https://png.pngtree.com/svg/20170615/cf347eac9c.png' }} style={{ width: 20, height: 20, marginRight: 15 }} />
			</View>
		</View>
	</View>
);

LoginDetails.propTypes = {
	placeHolder: PropTypes.string.isRequired,
};

export default LoginDetails;
