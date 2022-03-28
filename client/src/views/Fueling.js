import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../css/viewsCSS/Fueling.module.css';

const Fueling = (event) => {
    const [recipes,setRecipes] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/recipes").then(response=>{
            console.log(response.data.recipes)
            setRecipes(response.data.recipes);
        })
    }, []);

    return(
        <>
        <div className={styled.banner}>
            <div className={styled.txtwrp}>
                <h1>Fueling</h1>
                <div className={styled.subtitle}> On average a runnner needs 100 calories ever 30-60 minutes on a run</div>
                <Link to="/new/recipe" className="button"> New Recipe </Link>
            </div>    
        </div>
            <div className={styled.container}>
                {
                    recipes.map((item,i)=>{
                        return <div className={styled.recipe}>
                            <div className={styled.imgWrp}>
                                <img src="" alt={item.title} />
                            </div>
                            <h4>{item.title}</h4>    
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Fueling;