import React, { useState } from 'react';
import styled from '../css/viewsCSS/AddRecipe.module.css'

const AddRecipe = (props) =>{
    const [form,setForm] = useState({})

    const [dbError,setDBError] = useState({ })
    const [error,setError] = useState({
        title: true,
        description: true,
        ingredients: true
    })

    const lengths = {
        title: 3,
        description: 10,
        ingredients: 1
    }
    
    var errorSize = Object.keys(dbError).length;

    const [ingredients,setIngredients] = useState([])

    const onChangeHandler = (event) => {
        setForm({...form,[event.target.name]: event.target.value})

        if(event.target.name in error){
            if(event.target.value.length >= lengths[event.target.name]){
                setError({...error,[event.target.name]:true})
            }else{
                setError({...error,[event.target.name]:false})
            }
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

    }

    return(
        <>
            <div className={styled.newRecipe}>
                <h1>Add New Recipe</h1>
            </div>

            <div className={styled.container}>
                <form onSubmit={onSubmitHandler}>
                    <div className="errWrp">
                        {
                            errorSize > 1 ? <> <h4>Entries Required: </h4> {Object.keys(dbError).join(', ')} </> : ""
                        }
                    </div>

                    <div className={styled.wrp}>
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" />
                    </div>

                    <div className={styled.wrp}>
                        <label htmlFor="description">Description: </label>
                        <input type="text" name="description" />
                    </div>

                    <div className={styled.wrp}>
                        <label htmlFor="ingredients">Ingredients: </label>
                        <input type="text" name="ingredients" />
                    </div>

                    <div className={styled.wrp}>
                        <label htmlFor="cooking">Cooking: </label>
                        <input type="text" name="cooking" />
                    </div>

                    <div className={styled.wrp}>
                        <label htmlFor="time">Time: </label>
                        <input type="text" name="time" />
                    </div>
                    
                    {
                        Object.keys(error).every((item) => error[item]) ? <input type="submit" value="Create" className="submitish" /> : <input type="submit" value="Create" disabled className="submitish"/>
                    }

                </form>
            </div>
        </>
    )
}

export default AddRecipe;