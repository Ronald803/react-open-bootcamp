import React, {useState} from 'react';
import { getJoke } from './axiosService';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
let auxiliar='';
const ChuckNorris = () => {
    const [joke, setJoke] = useState();
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const giveMeAJoke = ()=> {
        auxiliar = '';
        getJoke()
            .then( response => {
                setJoke(response.data.value);
            })
            .catch( error => {
                alert(`Something went wrong: ${error}`)
            })
    }
    const control = (variable)=>{
        console.log({auxiliar});
        console.log({variable});
        if(variable==="like" && auxiliar==="dislike"){
            setLikes(likes+1);
            setDislikes(dislikes-1);
        } else if (variable==="dislike" && auxiliar==="like"){
            setLikes(likes-1);
            setDislikes(dislikes+1);
        }else if(variable!==auxiliar && variable === "like"){
            setLikes(likes+1);
        } else if( variable !==auxiliar && variable === "dislike"){
            setDislikes(dislikes+1)
        }
        auxiliar=variable
        console.log({auxiliar});
    }
    return (
        <div className='container card w-25'>
            <h5 className='card-header'>Chuck Norris' Jokes</h5>
            <img src="https://i.pinimg.com/originals/fb/c1/83/fbc1830d8c02d37d0cd2595ef5500270.jpg" className='card-img-top' alt="Chuck-Norrispicture"/>
            <div className='card-body'>
                { joke !=null &&
                    (
                        <div>
                            <p className='card-text'>{joke}</p>
                            <ThumbUpIcon onClick={()=>control('like')}></ThumbUpIcon>
                            <ThumbDownAltIcon onClick={()=>control('dislike')}></ThumbDownAltIcon>
                        </div>
                    )
                }
                <p>Likes: {likes}   ||    Dislikes: {dislikes}</p>
                <button onClick={giveMeAJoke} className='btn btn-primary'>Obtener Chiste</button>
            </div>
        </div>
    );
}

export default ChuckNorris;
 