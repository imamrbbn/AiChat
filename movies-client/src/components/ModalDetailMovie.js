import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Tilt from 'react-tilt'

import { GET_MOVIE_DETAIL } from '../store/actions/MoviesActions'

export default function ModalDetailMovie(props) {
  const dispatch = useDispatch()
	const [show, setShow] = useState(false)
  const detailMovie = props.detailMovie
  const chosenMovie = useSelector(state => state.MoviesReducer.chosenMovie)

  const handleClose = () => setShow(false);
  const handleShow = () =>  {
    dispatch(GET_MOVIE_DETAIL(detailMovie.imdbID))
    setShow(true)
  }
  
  let stars = []
  if (chosenMovie) {
    let scores = Math.round(Number(chosenMovie.imdbRating)/2)
    for (let i = 0; i < scores; i++) {
      stars.push(i)
    }
  }

  return (
    <>
      <p className="ml-3 mb-0" type="button"
        variant="primary" onClick={handleShow}
        > {detailMovie.Title} </p>

      <Modal show={show} onHide={handleClose}
        keyboard={false} size='lg'
      >
        <div className="card modalHeadBackground noBorder shadow mx-auto"> 
          <div className=" text-white row my-auto" >
          <span className="mx-auto" style={{width: '80%'}}>
            <Modal.Title className="ml-5 text-center">{detailMovie.Title}</Modal.Title>
          </span>
          <span>
            <Modal.Header className="noBorder ml-auto mr-4 mt-1 p-0" closeButton/>
          </span>
          </div>
        </div>

        <div className="card modalBackground noBorder shadow" >
        {chosenMovie &&
          <>
            <Modal.Body className="my-5 mx-4 row " id='responsiveRow'>
              <div className="col-5">
                <Tilt className="Tilt" options={{ max : 25 }} >
                  <div className="Tilt-inner"> 
                    <img src={detailMovie.Poster} className="card-img-top shadow-lg" 
                      id="posterImage" alt="detail-poster" 
                      />
                  </div>
                </Tilt>
              </div>

              <div className="card col-7 descBox" style={{height: '60vh'}} >
                <div className="card-body overflow-auto">
                  <p className="card-text ml-0"><b>Rating:</b> 
                    {stars.map((star,i) => {
                      return(
                      <FontAwesomeIcon icon={faStar} color="#9e9e9e" size="xs"
                         className="my-auto mx-2" key={i}/>
                      )
                    })}
                  ({chosenMovie.imdbRating} / 10.0 )</p>
                  <p className="card-text"><b> Duration:</b> {chosenMovie.Runtime}</p>
                  <p className="card-text"><b>Year:</b> {chosenMovie.Year}</p>
                  <p className="card-text"><b>Released:</b> {chosenMovie.Released}</p>
                  <p className="card-text"><b>Director:</b> {chosenMovie.Director}</p>
                  <p className="card-text"><b>Production:</b> {chosenMovie.Production}</p>
                  <p className="card-text"><b>Actors:</b> {chosenMovie.Actors}</p>
                  <p className="card-text"><b>Genre:</b> {chosenMovie.Genre}</p>
                  <p className="card-text"><b>Plot:</b> {chosenMovie.Plot}</p>
                  <p className="card-text"><b>Award:</b> {chosenMovie.Awards}</p>
                </div>
              </div>
            </Modal.Body>
          </>
        }
        </div>

      </Modal>
    </>
  )
}
