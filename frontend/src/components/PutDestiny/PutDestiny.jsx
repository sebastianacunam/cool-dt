import React, { useEffect, useState } from 'react'
import { getDestinies, getDetailById, updateDestiny } from '../../redux/actions/actionDestiny'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development';


export default function PutDestiny() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetailById(id));
    }, [dispatch, id]);
  
    const [input, setInput] = useState({
        name: '',
        country: '',
        city: '',
        description:'',
        picture: '',
        id: id
    })

    function handleChange(e){
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
        // setErrors(validate({
        //     ...input,
        //     [e.target.name]: e.target.value
        // }))
    }

    function handleSubmit(e){
        e.preventDefault();
        if(id){
            console.log(id, "aca estoy en el update a ver")
            if(input.name && input.country && input.city && input.description && input.picture){
                alert("Destino modificado correctamente!")
                dispatch(updateDestiny(input));
                dispatch(getDestinies())
                navigate('/')
            } else  { 
                alert("Faltan campos por completar...")
            }
        }
    }

    return (
        <div>
            <h2>Modificar destino</h2>

            <Link to='/'>
                <h3>Volver a página de inicio.</h3>
            </Link>

            <section>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div>
                        <label>Nombre del destino: </label>
                        <input type="text" value={input.name} onChange={(e)=>handleChange(e)} name="name"/>
                        {/* {errors.name && (<p className={style.errors}>{errors.name}</p>)} */}
                    </div>

                    <div>
                        <label>País: </label>
                        <input type="text" value={input.country} onChange={(e) => handleChange(e)} name="country"/>
                        {/* {errors.resume && (<p className={style.errors}>{errors.resume}</p>)} */}
                    </div>

                    <div>
                        <label>Ciudad: </label>
                        <input type="text" value={input.city} onChange={(e) => handleChange(e)} name="city"/>
                    </div> 

                    <div>
                        <label>Descripción del destino </label>
                        <input type="text" value={input.description} onChange={(e) => handleChange(e)} name="description"/>
                        {/* {errors.healthy && (<p className={style.errors}>{errors.healthy}</p>)} */}
                    </div>

                    <div>
                        <label>Imagen del destino: </label>
                        <input type="text" value={input.picture} onChange={(e) => handleChange(e)} name="picture" placeholder='Agregue la ruta de la imagen con el formato .jpg, .jpeg, .png'/>

                    </div>


                    {
                    !input.name || !input.country || !input.city || !input.description || !input.picture ? 
                        <button disabled type="submit">
                            modificar destinon't!
                        </button>
                    : 
                        <button type="submit">
                            modificar destino!
                        </button>
                    }
                </form>
            </section>
        </div>
    )
}
