
import http from "k6/http";
import {check} from 'k6'
export const options = {
    stages: [
        { duration: "10m", target: 50 },//get de 0 50 usuarios en 10 minutos
       
      ],
 
  
};

export default function () {


  const responseGet= http.get('https://fakeapi.platzi.com/en/rest/products/');
    const checkGet=check(responseGet,{
      'is responce status is 200:': (r)=>r.status === 200,    
  })    


}
