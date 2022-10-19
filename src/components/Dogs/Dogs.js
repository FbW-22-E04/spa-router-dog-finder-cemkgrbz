import {Link} from 'react-router-dom'
import "./Dogs.css"

function Dogs({dogs}) {
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
        </div>
      );
}

export default Dogs;