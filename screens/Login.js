import React, { PureComponent } from 'react';
import { Alert, Text, View, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import PropTypes from 'prop-types';
import LoginDetails from '../components/LoginDetails';
import styles from '../components/LoginDetails/styles';

export default class Login extends PureComponent {
	static propTypes = {
		onClick: PropTypes.func.isRequired,
	};

	handleSubmit = (e) => {
		e.preventDefault();
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.Login}>
					<Text style={styles.LogIn}>Log In</Text>
				</View>
				<View style={styles.LoginDetails}>
					<LoginDetails placeHolder="Username" />
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 30 }}>
						<View style={{ flex: 0.4 }}>
							<TouchableOpacity onPress={this.props.onClick}>
								<Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#b7c2cf' }}>Remember me</Text>
							</TouchableOpacity>
						</View>
						<View style={{ flex: 0.4 }}>
							<TouchableOpacity onPress={this.props.onClick}>
								<Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#b7c2cf' }}>Reset Password?</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={{ flexDirection: 'row', marginBottom: 30 }}>
						<SocialIcon
							button
							type="facebook"
							onPress={() => {
								Alert('facebook');
							}}
							iconSize={30}
							style={{ width: 80, height: 75, borderRadius: 1, margin: 10 }}
						/>
						<SocialIcon
							button
							type="twitter"
							onPress={() => {
								Alert('twitter');
							}}
							iconSize={30}
							style={{ width: 80, height: 75, borderRadius: 1, margin: 10 }}
						/>
						<SocialIcon
							button
							type="google-plus-official"
							onPress={() => {
								Alert('google');
							}}
							iconSize={30}
							style={{ width: 80, height: 75, borderRadius: 1, margin: 10 }}
						/>
					</View>
				</View>
				<View style={styles.Touchable}>
					<TouchableOpacity  onPress={this.handleSubmit}> 
						<Text style={{ fontFamily: 'Roboto', fontSize: 26, textAlign: 'center', textAlignVertical: 'center', color: 'white', backgroundColor: '#4afbaa', width: 275, height: 90}}>LOGIN</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
