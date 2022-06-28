import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'

function MovieCard({movie}) {
    return (
        <div>
            <Card className="h-100">
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>
                        {movie.Year}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard