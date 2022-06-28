import { Button } from 'bootstrap'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import MovieCard from './MovieCard'
import {useSelector} from 'react-redux'


function Results() {

    const movies = useSelector(state => state.search.movies)

    return (
        <div>
            <Container>
                <Row sm={1} md={2} lg={3} xl={4} className="g-4">

                    {movies.map(movie => {
                        return (
                            <Col  key={movie.imdbID} className='g-4'>
                                <MovieCard movie={movie}/> 
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Results