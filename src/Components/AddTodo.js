import React, { Component } from 'react'

class AddTodo extends Component {

    state ={
        title:''
    }

    //onValueChange
    onChange =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit =(e)=> {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}
            style={{display : 'flex',padding: '5px'}}>
                <input type="text" 
                name="title" 
                placeholder="Add Todo ..." 
                style={{flex:'10'}}
                value={this.state.title}
                onChange={this.onChange}
                className='btnval'
                />
                <input type="submit" className="btn" 
                value="Submit"
                style={{flex:'1'}}
                />
            </form>
        )
    }
}

export default AddTodo;
