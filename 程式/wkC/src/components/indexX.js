import React, { Component } from 'react';
import Note from './Note';
import { 
	View, StyleSheet, Text, ScrollView, TouchableOpacity, AppRegistry, TextInput
} from 'react-native';

export default class indexX extends Component {

	state = {
		noteArray: [{'data':'testdata','note':'testnote'}],
		noteText: '',
	}
	render(){
		let notes = this.state.noteArray.map((val,key) =>{
			return <Note key={key} keyval={key} val={val} deleteMethod={ ()=>this.deleteNote(key) }/>
		})
		return(
		<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>- NOTER -</Text>
				</View>
			
			<ScrollView style={styles.scrollContainer}>
				{notes}
			</ScrollView>
			<View style={styles.footer}>
				<TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity>
				<TextInput 	style={styles.TextInput} 
					placeholder="input here!"
					placeholderTextColor="white"
					underlineColorAndroid = "transparent"
					onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText }>
				</TextInput>
			</View>
		</View>
		);
	}
	addNote(){
		if(this.state.noteText){
			var d = new Date();
			this.state.noteArray.push( {'data':d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate(), 'note':this.state.noteText } );
			this.setState({noteArray: this.state.noteArray })
			this.setState({noteText: '' });
		}
	}
	deleteNote(key){
		this.state.noteArray.splice(key, 1);
		this.setState({noteArray: this.state.noteArray });

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		backgroundColor: '#E91E63',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 10,
		borderBottomColor: '#ddd',
	},
	headerText: {
		padding: 26,
		fontSize: 18,
		color: 'white',
	},
	scrollContainer: {
		flex: 1,
		marginBottom: 100,
	},
	footer: {
		position: 'absolute',
		alignItems: 'center',
		bottom: 0,
		left: 0,
		right: 0, 
	},
	addButton: {
		backgroundColor: '#E91E63',
		height: 90,
		width: 90,
		borderRadius: 50,
		borderColor: '#ccc',
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 8,
		marginBottom: -45,
		zIndex: 10,

	},
	addButtonText: {
		color: '#fff',
		fontSize: 24,
	},
	TextInput: {
		alignSelf: 'stretch',
		color: '#fff',
		padding: 20,
		paddingTop: 46,
		backgroundColor: '#252525',
		borderTopWidth: 14,
		borderTopColor: '#ededed',
	}

})


