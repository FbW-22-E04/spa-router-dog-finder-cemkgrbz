import {useParams, Link} from 'react-router-dom'


function SingleDog({dogs}) {

  const {name} = useParams()
  
  const dog = dogs.filter(item => item.name === name)

    return (
      <div>
          <div className='container2'>
            <div>Hello from {dog[0].name}</div>
            <div>My age is {dog[0].age}</div>
            <div>
              {dog[0].facts.map((fact, i) => <p key={i}>{fact}</p>)}
            </div>
          </div>
      </div>
      );

}

export default SingleDog;