import React, {Component} from 'react';
import {TouchableHighlight, StyleSheet, Text, View, Dimensions, Alert, TextInput} from 'react-native';

const screen = Dimensions.get('window')
const buttonWidth = screen.width / 4
export default class Btn extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            intResult : 0,
            result : "0",
            _operator : ""
        }
    }
    initState = {
        intResult : 0,
        result : "0",
        _operator : ""
    }
    onPress(value){ 
       this.setState(
       {
            result : parseFloat(this.state.result + value)
       })
    }
    setOperator(operator)
    {
        this.setState(
            {
                _operator : operator
            }
        )
    }
    clear()
    {
        this.setState(this.initState)
    }
    render(){
        const btns = []
        for(let i = 0; i < 4; i++)
        {
            btns.push(
                <TouchableHighlight style = {this.styles.submit}
                        onPress = {() => this.onPress(`${i}`)}
                    >
                            <Text style={[buttonWidth,this.styles.submitText]}>{i.toString()}</Text>        
                    </TouchableHighlight>
            )
        }
        return(
            <View 
            style = {{flex : 1 , flexDirection : 'column', justifyContent : 'center' , marginTop : 200}}
            >
                <View>
                    <Text>{this.state.result}</Text>
                </View>
                <View style = {{flexDirection : 'row', alignItems : 'center', justifyContent : 'center'}}>
                    {btns}
                </View>

                <View style = {{flexDirection : 'row', alignItems : 'center', justifyContent : 'center'}}>
                    <TouchableHighlight style = {this.styles.submit}
                        onPress = {() => this.onPress("4")}       
                    >
                            <Text style={[buttonWidth,this.styles.submitText]}>4</Text>        
                    </TouchableHighlight>
                    <TouchableHighlight style = {this.styles.submit}
                        onPress = {() => this.onPress("5")}       
                    >
                            <Text style={[buttonWidth,this.styles.submitText]}>5</Text>        
                    </TouchableHighlight>
                    <TouchableHighlight style = {this.styles.submit}
                        onPress = {() => this.onPress("6")}       
                    >
                            <Text style={[buttonWidth,this.styles.submitText]}>6</Text>        
                    </TouchableHighlight>
                    <TouchableHighlight style = {this.styles.submit}
                        onPress = {() => this.onPress("7")}       
                    >
                            <Text style={[buttonWidth,this.styles.submitText]}>7</Text>        
                    </TouchableHighlight>
                </View>
                <View style = {{flexDirection : 'row', alignItems : 'center', justifyContent : 'center'}}>
                    <TouchableHighlight style = {this.styles.submit}
                        onPress = {() => this.onPress("8")}       
                    >
                            <Text style={[buttonWidth,this.styles.submitText]}>8</Text>        
                    </TouchableHighlight>
                    <TouchableHighlight style = {this.styles.submit}
                        onPress = {() => this.onPress("9")}       
                    >
                            <Text style={[buttonWidth,this.styles.submitText]}>9</Text>        
                    </TouchableHighlight>
                    <TouchableHighlight style = {this.styles.submit}
                        onPress = {() => this.setOperator("+")}       
                    >
                        <Text style={[buttonWidth,this.styles.submitText]}>+</Text>        
                    </TouchableHighlight>
                    <TouchableHighlight style = {this.styles.submit}
                        onPress = {() => this.setOperator("-")}    
                    >
                        <Text style={[buttonWidth,this.styles.submitText]}>-</Text>        
                    </TouchableHighlight>
                    <TouchableHighlight style = {this.styles.submit}
                        onPress = {() => this.setOperator("x")}   
                    >
                       <Text style={[buttonWidth,this.styles.submitText]}>x</Text>             
                    </TouchableHighlight>
                    <TouchableHighlight style = {this.styles.submit}
                        onPress = {() => this.setOperator("-")}    
                    >
                        <Text style={[buttonWidth,this.styles.submitText]}>/</Text>        
                    </TouchableHighlight>
                </View>
                <View style = {{flexDirection : 'row', alignItems : 'center', justifyContent : 'center'}}>
                    <TouchableHighlight style = {this.styles.submit}
                        onPress = {() => this.clear()}    
                    >
                        <Text style={[buttonWidth,this.styles.submitText]}>C</Text>        
                    </TouchableHighlight>
                </View>
                
            </View>
        )
    }
    styles = StyleSheet.create(
        {
            submit:{
                flex : 1,
                flexDirection : 'column',
                width :  50,
                height : 50,
                marginRight:10,
                marginLeft:10,
                marginTop:10,
                paddingTop:5,
                paddingBottom:5,
                backgroundColor:'#68a0cf',
                borderRadius:5,
                borderWidth: 1,
                borderColor: '#fff'
              },
            button : {
                borderColor : 'gray',
                height : Math.floor(buttonWidth),
                width : Math.floor(buttonWidth),
                alignItems : 'center',
                justifyContent : 'center',
            },

            submitText: {
                fontSize : 10,  
                color : '#fff',
                alignItems : 'center',
                justifyContent : 'center'
            }
        }
    )
}