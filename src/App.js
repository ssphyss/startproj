import React, { Component } from 'react';
import { Carousel } from 'antd';
import './app.scss';

class App extends Component {
    onChange = (a, b, c) => {
        console.log(a, b, c)
    }
    render(){
        return(
            <div>
                <Carousel>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
        )
    }
}

export default App;