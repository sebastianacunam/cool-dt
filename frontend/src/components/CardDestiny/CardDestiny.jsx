import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css'

export default function CardDestiny({name, picture, country, city, _id}) {
  return (
    <div className='flex bg-slate-100'>
        <div>
            <Link to ={`/destiny/${_id}`}>
                <h3 className="text-3xl font-bold underline">{name}</h3>
            </Link>
            <div > 
                {/* <Link to ={`/destiny/${_id}`}> */}
                    <div >
                        {
                            picture ? 
                            <img src={picture} alt='img not found'/>
                            :
                            <img src={'https://us.123rf.com/450wm/belchonock/belchonock1906/belchonock190602030/124303341-mujer-con-plato-vac%C3%ADo-en-la-mesa-de-madera-vista-superior.jpg?ver=6'} alt='img not found'/>
                        }
                    </div>
                {/* </Link> */}
            </div>
            <div>
                <h4>País: {country} </h4>
                <h5>Ciudad: {city} </h5>
            </div>

        </div>
    </div>
  )
}
