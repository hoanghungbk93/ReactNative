import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Dimensions, Alert, TextInput } from 'react-native';

const screen = Dimensions.get('window')
const buttonWidth = screen.width / 4
export default class Btn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            final: false,
            finalResult: 0,
            secondResult: 0,
            result: 0,
            _operator: "",
            firstCalculate: true
        }
    }
    initState = {
        final: false,
        finalResult: 0,
        secondResult: 0,
        result: 0,
        _operator: "",
        firstCalculate: true
    }
    onPress(value) {
        this.setState(
            {
                final: false,
                result: this.state.result * 10 + value,
            })
    }
    async setOperator(operator) {
        _result = 0
        if ("+" == operator) {
            _result = this.state.secondResult + this.state.result
            this.setState({ operator: "+" })
        }
        else if ("-" == operator) {
            _result = this.state.secondResult - this.state.result
            this.setState({ operator: "-" })
        }
        else if ("x" == operator) {
            if (this.state.operator == "=" ) {
                await this.setState({
                    result : 1
                })
            }
            console.log(this.state.secondResult)
            _result = this.state.secondResult * this.state.result
            this.setState({ operator: "x"})
        }
        else if ("/" == operator) {
            if (0 != this.state.result)
            {
                _result = this.state.secondResult / this.state.result
                this.setState({ operator: "/" })
            }
        }
        if (true == this.state.firstCalculate) {
            this.setState({
                final: true,
                secondResult: this.state.result,
                result: 0,
                firstCalculate: false,
                finalResult: this.state.result
            })
        }
        else {
            this.setState(
                {
                    final: true,
                    secondResult: _result,
                    result: 0,
                    finalResult: _result
                }
            )
        }
        if ("=" == operator) {
            if (this.state.operator == "+") {
                _result = this.state.result + this.state.secondResult
            }
            else if (this.state.operator == "-") {
                _result = this.state.secondResult - this.state.result
            }
            else if (this.state.operator == "x") {
                _result = this.state.result * this.state.secondResult
            }
            else if (this.state.operator == "/") {
                if (this.state.result == 0) {
                    Alert.alert('Can not divice by 0')
                }
                else {
                    _result = this.state.secondResult / this.state.result
                }

            }
            this.setState(
                {
                    operator: "=",
                    firstCalculate: false,
                    final: true,
                    secondResult: _result,
                    result: 0,
                    finalResult: _result
                }
            )
        }

    }
    clear() {
        this.setState(this.initState)
    }
    render() {
        return (
            <View
                style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', marginTop: 200 }}
            >
                <View>
                    <Text style={{ fontSize: 40 }}>{!this.state.final ? this.state.result : this.state.finalResult}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.onPress(0)}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>0</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.onPress(1)}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>1</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.onPress(2)}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>2</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.onPress(3)}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>3</Text>
                    </TouchableHighlight>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.onPress(4)}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>4</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.onPress(5)}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>5</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.onPress(6)}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>6</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.onPress(7)}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>7</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.onPress(8)}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>8</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.onPress(9)}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>9</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.setOperator("+")}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>+</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.setOperator("-")}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>-</Text>
                    </TouchableHighlight>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.setOperator("x")}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>x</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.setOperator("/")}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>/</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.clear()}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>C</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={this.styles.submit}
                        onPress={() => this.setOperator('=')}
                    >
                        <Text style={[buttonWidth, this.styles.submitText]}>=</Text>
                    </TouchableHighlight>
                </View>

            </View>
        )
    }
    styles = StyleSheet.create(
        {
            submit: {
                flex: 1,
                flexDirection: 'column',
                width: 50,
                height: 50,
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: '#68a0cf',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center'
            },
            button: {
                borderColor: 'gray',
                height: Math.floor(buttonWidth),
                width: Math.floor(buttonWidth),
                alignItems: 'center',
                justifyContent: 'center',
            },

            submitText: {
                fontSize: 30,
                color: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    )
}