import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import UpdateForm from './UpdateForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Myfav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favPoki: [],
            show:false,
            name:'',
            url:'',
            id:'',
        }
    }


    componentDidMount = async () => {
        let url = 'https://pokimon301.herokuapp.com'
        const data = await axios.get(`${url}/getfavpoki`)
        console.log(data.data)
        this.setState({
            favPoki: data.data
        })
        console.log(this.state.favPoki)

    }


    deletepoki=async(id)=>{
        console.log(id)
        let url = 'https://pokimon301.herokuapp.com'
        const data = await axios.delete(`${url}/deletepoki?id=${id}`)
         console.log(data.data)
        this.setState({
            favPoki: data.data
        })
        console.log(this.state.favPoki)
    }



    updatedata=async(e)=>{
        e.preventDefault();
        const name=e.target.name.value
        const url=e.target.url.value
        const id=this.state.id
        console.log(name)
        console.log(url)
        console.log(id)
        let urlu = 'https://pokimon301.herokuapp.com'
        const data = await axios.put(`${urlu}/updatepoki?name=${name}&url=${url}&id=${id}`)
        this.setState({
            favPoki: data.data
        })
    }

    showModal=(idx)=>{
        this.setState({
            name:this.state.favPoki[idx].name,
            url:this.state.favPoki[idx].url,
            id:this.state.favPoki[idx]._id,

            show:true
        })
        

    }
    hideModal=()=>{
        this.setState({
            show:false
        })}
    render() {
        return (
            <div>
              
                <CardGroup>
                    {this.state.favPoki.map((item, idx) => {    
                        return (<div>
                            <Card>

                                <Card.Body>
                                    <Card.Title>poki name: {item.name} </Card.Title>
                                    <Card.Text> url: {item.url}</Card.Text>
                                    <Button onClick={()=>this.deletepoki(item._id)} >delete</Button>
                                    <Button onClick={()=>this.showModal(idx)} >update</Button>
                                </Card.Body>

                            </Card>

                        </div>)
                    })}


                </CardGroup>
                <UpdateForm  show={this.state.show} hideModal={this.hideModal} name={this.state.name} url={this.state.url} updatedata={this.updatedata}  />
            </div>
        )
    }
}

export default Myfav
