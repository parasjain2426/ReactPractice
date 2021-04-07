import React, { Component, useEffect, useState } from 'react'

// class InputTodo extends Component{
//     state = {
//         title: ""
//     }
//     onChange = e =>{
//         this.setState({
//             [e.target.name]: e.target.value,
//         })
//     }
//     handleSubmit = e =>{
//         e.preventDefault();
//         if(this.state.title.trim()){
//             this.props.addTodoProps(this.state.title);
//             this.setState({
//                 title: ""
//             })
//         }
//         else{
//             alert("Please write something");
//         }
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit} className="form-container">
//                 <input type="text"
//                 className="input-text"
//                 name="title" 
//                 placeholder="Type Todo..." 
//                 value={this.state.title}
//                 onChange={this.onChange}
//                 />
//                 <button  className="input-submit">Submit</button>
//             </form>
//         )
//     }
// }

// export default InputTodo;

const InputTodo = props => {
    const [inputText,setInputText] = useState({
        title:""
    });

    const onChange = e =>{
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
            }

    const handleSubmit = e =>{
                e.preventDefault();
                if(inputText.title.trim()){
                    props.addTodoProps(inputText.title);
                    setInputText({
                        title:""
                    })
                }
                else{
                    alert("Please write something");
                }
            }

    useEffect(()=>{
        return ()=>{
            console.log("Cleaning Up...!")
        }
    },[])        

    return(
            <form onSubmit={handleSubmit} className="form-container">
                <input type="text"
                className="input-text"
                name="title" 
                placeholder="Type Todo..." 
                value={inputText.title}
                onChange={onChange}
                />
                <button  className="input-submit">Submit</button>
            </form>
        )
}

export default InputTodo;