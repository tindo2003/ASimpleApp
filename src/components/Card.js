import React from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import parse from 'html-react-parser';



export default function Card(props) {
    const [show, setShow] = React.useState(false);
    const [myRecipe, setMyRecipe] = React.useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        getRecipe()
    }
{/* ...........................................Get actual recipe ...........................................*/}
    function getRecipe() {
        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/'+props.id+'/information',
            headers: {
              'X-RapidAPI-Key': '3a0ea5e317msha7d6e84327f9b94p11bffejsn96c57480dc07',
              'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              setMyRecipe((oldValue) => {
                  return (
                    response.data.summary
                  )
              })
          }).catch(function (error) {
              console.error(error);
          });
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.imageLink} onClick={handleShow}/>
            {console.log(props.id)}
            <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>Your recipe</Modal.Title>
            </Modal.Header>

            <Modal.Body>{parse(myRecipe)}</Modal.Body>

            <Modal.Footer>
              <button variant="secondary" onClick={handleClose}>
                Close
              </button>
            </Modal.Footer>

          </Modal>
        </div>
    )
}