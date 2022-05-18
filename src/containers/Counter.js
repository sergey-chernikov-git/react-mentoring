import React,{PureComponent} from 'react';

export class Counter extends PureComponent {

    constructor(){
        super();
        this.state={
          count:0
        }
      }
    increment(){
        this.setState({count:this.state.count+1});
    }

    decrement(){
        if (this.state.count < 1){
            alert("Please, stop clicking because your counter is 0")
            return
        }
        this.setState({count:this.state.count-1});
    }

    render(){
        return (
            <div>
            <h2>
                Button click counter: {this.state.count}
            </h2>
            <button onClick={() => this.increment()}>Increment</button>
            <button onClick={() => this.decrement()}>Decrement</button>
        </div>
        );
    }
}