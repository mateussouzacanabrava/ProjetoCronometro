import React from 'react'


class Contador extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            segundos: 0,
            minutos: 0
        }
    }

  incrementar(){
      this.setState(
          (state) => {
              if (state.segundos >= 5){
                  this.zerar()
                  this.incrementarMinutos()
              }
              return({segundos: state.segundos + 1})
          }
      )
  }
  zerar(){
      this.setState({segundos: 0})
  }

  incrementarMinutos(){
      this.setState ({minutos: this.state.minutos + 1})
  }
componentDidMount(){
   this.timer = setInterval( () => this.incrementar(), 1000)
}
    render(){
        return(
            <h1>{this.state.minutos}:{this.state.segundos}</h1>
        )
    }
}

export default Contador