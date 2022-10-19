import {useParams, Link} from 'react-router-dom'


function SingleDog({dogs}) {

  const {name} = useParams()
  
  const dog = dogs.filter(item => item.name === name)

    return (
      <div>
          <h3>HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.</h3>
          <div className="container">{
            dogs.map((item, idx) => {
              return <Link key={idx} to={'/dogs/' + item.name}>
                <img src={item.image}/>
                <p>{item.name}</p>
              </Link>
            })
          }</div>
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