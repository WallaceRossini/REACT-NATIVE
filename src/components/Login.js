import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TextComponent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            senha: ''
        }
    }

    entrar = event => {
       if(!this.validar()) return
    }

    cadastrar = event => {
        this.props.navigation.navigate('Cadastro')
    }

    validar = () => {
        const {email,senha} = this.state
        if(!email || !senha){
            Alert.alert('Ops...','Todos os campos são obrigadorios')
        }
    }

    render() {
        return (
           
                <LinearGradient
                    colors={["#00e676", "#009688"]}
                    style={{ flex: 1 }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}>
                    <View style={styles.container}>
                        <View style={styles.form}>
                            {/* <Text style={styles.titulo}>Tela de Login</Text> */}
                            <TextInput 
                            style={styles.input} 
                            placeholder='Seu email' 
                            onChangeText={texto => this.setState({email:texto})} />

                            <TextInput 
                            style={styles.input} 
                            placeholder='Sua senha' 
                            onChangeText={texto => this.setState({senha:texto}) }  />

                            <TouchableOpacity style={styles.button}>
                                <Text>Entrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={this.cadastrar}>
                                <Text>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
          
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    form: {
        // backgroundColor: '#2d2d2d',
        padding: 16,
        borderRadius: 10,
        margin: 16,
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    input: {
        marginTop: 8,
        alignSelf: 'stretch',
        padding: 8,
        backgroundColor: 'white',
        fontSize: 16,
        borderRadius: 8,
        borderWidth:2
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: '#51DB75',
        height: 42,
        marginTop: 16,
        padding: 8,
        borderRadius: 8,
        borderWidth:2
    }
})
