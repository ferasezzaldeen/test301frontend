import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';

export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pokiData: [],

        }
    }


    componentDidMount = async () => {
        let url = 'https://pokimon301.herokuapp.com'
        const data = await axios.get(`${url}/getpoki`)
        this.setState({
            pokiData: data.data,
        })
        console.log(this.state.pokiData)
    }


    addToFav= async(idx)=>{

        let name=this.state.pokiData[idx].name
        let url=this.state.pokiData[idx].url   
        let urlp = 'https://pokimon301.herokuapp.com'
        await axios.post(`${urlp}/addpoki?name=${name}&url=${url}`)
    }

    render() {
        return (
            <div>
              
                <CardGroup>
                    {this.state.pokiData.map((item, idx) => {
                        return (<div>
                            <Card>

                                <Card.Body>
                                    <Card.Title>poki name: {item.name} </Card.Title>
                                    <Card.Text> url: {item.url}</Card.Text>
                                    <Button onClick={()=>this.addToFav(idx)} >add to my fav</Button>
                                </Card.Body>

                            </Card>

                        </div>)
                    })}


                </CardGroup>
            </div>
        )
    }
}

export default Home
