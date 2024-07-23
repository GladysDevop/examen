import {check} from 'k6'
import http from "k6/http";

export const options = {
    stages: [
        { duration: "5m", target: 30 },//get de 0 30 usuarios en 5 minutos
        { duration: "5m", target: 0 },//get de 0 usuarios en 5 minutos
      ],
 
  
};

export default function () {
  
  var url='https://jsonplaceholder.typicode.com/posts'   
  var param ={
      headers: {
          'Content-Type': 'application/json'
      }
  }
    
  var payload=JSON.stringify({
    "title": "producto prueba",
    "price": 10,
    "description": "A prueba",
    "categoryId": 1,
    "images": []
  });
  const responseP = http.post(url, param,payload);  

  check(responseP,{
    'is responce status is 201:': (r)=>r.status === 201,    
  })
}
