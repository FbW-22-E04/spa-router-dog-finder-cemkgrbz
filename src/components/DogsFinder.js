import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dogs from './Dogs/Dogs'
import SingleDog from './SingleDog'

const dogs = [
  {
    name: 'Whiskey',
    id: 0,
    image: '/images/whiskey.jpg',
    age: 4,
    facts: [
      'Whiskey loves eating popcorn',
      'Whiskey is a terrible guard dog',
      'Whiskey wants to cuddle with you'
    ]
  },
  {
    name: 'Hazel',
    id: 1,
    age: 0,
    image: './images/hazel.jpg',
    facts: [
      'Hazel has a lot of energy',
      'Hazel is highly intelligent',
      'Hazel loves people more than dogs'
    ]
  },
  {
    name: 'Tubby',
    id: 2,
    age: 4,
    image: './images/thubby.jpg',
    facts: [
      'Tubby is really stupid',
      'Tubby does not like walks',
      'Angelina hates Tubby'
    ]
  }
];
function DogsFinder() {
    return ( 
        <BrowserRouter>
            <Routes>
              
                <Route path='/' element={<Dogs dogs={dogs}/>}/>
                <Route path='/dogs/:name' element={<SingleDog dogs={dogs}/>}/>
            </Routes>
        </BrowserRouter>
        
     );
}

export default DogsFinder;