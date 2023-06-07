import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDestinies } from '../../redux/actions/actionDestiny';
import CardDestiny from '../CardDestiny/CardDestiny.jsx';
import { Link } from 'react-router-dom';

export default function Home() {

    const dispatch = useDispatch();
    const allDestinies = useSelector ( (state) => state.allDestinies.data)
    // const detail = useSelector ( (state) => state.detail )
    // console.log(detail, "quiero ver que es lo que trae en el home")
    // console.log(allDestinies)
    
    useEffect(()=>{
        dispatch(getDestinies());
    }, [dispatch])
    
    
    return (
        <div>
            <Link to='/create'>
                <h2>Crear destino</h2>
            </Link>
            {
                allDestinies && allDestinies.map( destinies => {
                    return (
                        <CardDestiny 
                        name={destinies.name}
                        picture={destinies.picture}
                        country={destinies.country}
                        city={destinies.city}
                        key={destinies._id}
                        _id={destinies._id}
                        />
                    )
                })
            }
        </div>
    )
}
