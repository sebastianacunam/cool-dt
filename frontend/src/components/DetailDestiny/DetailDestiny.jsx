import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDetailById, deleteDestiny } from '../../redux/actions/actionDestiny';
import { useParams, Link } from 'react-router-dom/dist/umd/react-router-dom.development';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import swal from 'sweetalert';



export default function DetailDestiny(){
  
  const { id } = useParams()
  const dispatch = useDispatch();  
  const navigate = useNavigate();
  const { name, country, city, picture, description } = useSelector( (state) => state.detail)

  useEffect(() => {
    if (id) {
      console.log(id, "quiero ver qué llega como id acá ")
      dispatch(getDetailById(id));
    }
  }, [dispatch, id]);

  function handleDeleteDestiny(e) {
      e.preventDefault()
      dispatch(deleteDestiny(id))
      if(window.confirm("¿Estás seguro que quieres eliminar este destino? Si lo eliminas no podrás deshacer el cambio.")===true)
      swal({
        title: '¡Eliminado con éxito!',
        text: ' ',
        icon: 'success',
        button: 'OK!',
      })
      navigate('/')
  }

  return (
    <div>
      <h1>{name}</h1>
      <h3>{country}</h3>
      <h3>{city}</h3>
      <img src={picture} alt="" />
      <p>{description}</p>
      {console.log("jaaj")}

      <div>
        <Link to='/'>
          <button onClick={(e)=>handleDeleteDestiny(e)}>Borrar Destino</button>
        </Link>
      </div>


        {
          console.log("quiero ver cómo llega el id acá dkjadlasd", id)
        }

      <div>
        <Link to={`/update/${id}`}>
          <h2>Modificar Destino</h2>
        </Link>
      </div>

      <div>
        <Link to='/'>
          <h3>Volver a la página de inicio</h3>
        </Link>
      </div>
    </div>
  )
}
