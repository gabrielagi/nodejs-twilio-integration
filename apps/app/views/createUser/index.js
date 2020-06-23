//Dependencias
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

class CreateUser extends Component {
  constructor(props) {
    super(props);

      this.state = {
      	Email: null,
      };
  }

  render() {
    return <View style={styles.container} >;
			<Text style={styles.title}> Email</Text>
			<TextInput>
				style={styles.text}
			</TextInput>
		</View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    paddingVertical: 20,
    paddingHorizontal: 30,
	},
	title: {
		color: '#FFF',
		fontSize: 16,
		fontWeight: 'bold',
		marginVertical: 10,
	},
	text: {
		borderWidth: 1,
		borderColor: '#FFF',
		height: 45,
		width: '100%',
	},
});

export default CreateUser;