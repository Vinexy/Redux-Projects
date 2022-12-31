import {useState,useEffect, use} from 'react'
import {Container,Row,Col, CardImg} from 'react-bootstrap'
import axios from 'axios';


import Card from 'react-bootstrap/Card';
import { useFormik } from "formik";

function Weather() {
    const [wet,setWet]=useState({});
    const [val,setVal]=useState();
   

    const week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
    const current = new Date();

    useEffect(()=>{
        setVal(values.country)
    })
     

    useEffect(() => {
        
        switch(val){
          case "ankara":
            axios(`https://api.openweathermap.org/data/2.5/onecall?lat=39.92&lon=32.86&exclude=hourly,minutely&appid=2501c978d52592686916892fb640b242`)
            .then((res)=>setWet(res.data))
            
            break;
          case 'istanbul':
            axios(`https://api.openweathermap.org/data/2.5/onecall?lat=41.01&lon=28.97&exclude=hourly,minutely&appid=2501c978d52592686916892fb640b242`)
            .then((res)=>setWet(res.data))
            break;
          case 'izmir':
            axios(`https://api.openweathermap.org/data/2.5/onecall?lat=38.42&lon=27.14&exclude=hourly,minutely&appid=2501c978d52592686916892fb640b242`)
            .then((res)=>setWet(res.data))
            break;
          default:
            axios(`https://api.openweathermap.org/data/2.5/onecall?lat=39.92&lon=32.86&exclude=hourly,minutely&appid=2501c978d52592686916892fb640b242`)
            .then((res)=>setWet(res.data))
            break;
        }  
        
      }, [val])
    const {handleSubmit, handleChange, values}= useFormik({
        initialValues: {
            country:"",
        },
        onSubmit: (values)=>{
            console.log(values);     
        },
         
    });

   
    
    
    
      console.log(wet);
          
  return (
    <div>
             
        <Container className='mt-5'>
            <div className='rounded-pill bg-warning p-4 text-center' >
                <form>
                    <select className='p-3' name='country' value={values.country} onChange={handleChange} >
                        <option value="ankara" >Ankara</option>
                        <option value="istanbul" >İstanbul</option>
                        <option value="izmir" >İzmir</option>
                    </select>
                    
                    
                    
                </form>
                                    
            </div>
            
            <Row className='mt-3 bg-primary p-4 rounded'>
                <Col>
                    <Card border="danger" style={{ width: '8rem' }}>
                        <Card.Title>{week[current.getDay()]}</Card.Title>
                        <Card.Img variant="top" src={`${wet.daily?.[0].weather[0].description}.png`} />
                        <Card.Body>
                            <Card.Text className='float-left text-center'>
                            {`${parseInt(wet.daily?.[0].temp.day-273)}° `}
                                
                            {`${parseInt(wet.daily?.[0].temp.night-273)}° `}
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '8rem' }}>
                        <Card.Title>{week[current.getDay()+1]}</Card.Title>
                        <Card.Img  src={`${wet.daily?.[1].weather[0].description}.png`} />
                        <Card.Body>
                            <Card.Text className='float-left text-center'>
                            {`${parseInt(wet.daily?.[1].temp.day-273)}° `}
                            
                            {`${parseInt(wet.daily?.[1].temp.night-273)}° `}
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '8rem' }}>
                        <Card.Title>{week[current.getDay()+2]}</Card.Title>
                        <Card.Img variant="top" src={`${wet.daily?.[2].weather[0].description}.png`} />
                        <Card.Body>
                            <Card.Text className='float-left text-center'>
                            {`${parseInt(wet.daily?.[2].temp.day-273)}° `}
                                
                            {`${parseInt(wet.daily?.[2].temp.night-273)}° `}
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '8rem' }}>
                        <Card.Title>{week[current.getDay()+3]}</Card.Title>
                        <Card.Img variant="top" src={`${wet.daily?.[3].weather[0].description}.png`} />
                        <Card.Body>
                            <Card.Text className='float-left text-center'>
                            {`${parseInt(wet.daily?.[3].temp.day-273)}° `}
                                
                            {`${parseInt(wet.daily?.[3].temp.night-273)}° `}
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '8rem' }}>
                        <Card.Title>{week[current.getDay()+4]}</Card.Title>
                        <Card.Img variant="top" src={`${wet.daily?.[4].weather[0].description}.png`} />
                        <Card.Body>
                            <Card.Text className='float-left text-center'>
                            {`${parseInt(wet.daily?.[4].temp.day-273)}° `}
                                
                            {`${parseInt(wet.daily?.[4].temp.night-273)}° `}
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '8rem' }}>
                        <Card.Title>{week[current.getDay()+5]}</Card.Title>
                        <Card.Img variant="top" src={`${wet.daily?.[5].weather[0].description}.png`} />
                        <Card.Body>
                            <Card.Text className='float-left text-center'>
                            {`${parseInt(wet.daily?.[5].temp.day-273)}° `}
                                
                            {`${parseInt(wet.daily?.[5].temp.night-273)}° `}
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '8rem' }}>
                        <Card.Title>{week[current.getDay()+6]}</Card.Title>
                        <Card.Img variant="top" src={`${wet.daily?.[6].weather[0].description}.png`} />
                        <Card.Body>
                            <Card.Text className='float-left text-center'>
                            {`${parseInt(wet.daily?.[6].temp.day-273)}° `}
                                
                            {`${parseInt(wet.daily?.[6].temp.night-273)}° `}
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '8rem' }}>
                        <Card.Title>{week[current.getDay()+7]}</Card.Title>
                        <Card.Img variant="top" src={`${wet.daily?.[7].weather[0].description}.png`} />
                        <Card.Body>
                            <Card.Text className='float-left text-center'>
                            {`${parseInt(wet.daily?.[7].temp.day-273)}° `}
                                
                            {`${parseInt(wet.daily?.[7].temp.night-273)}° `}
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Weather;