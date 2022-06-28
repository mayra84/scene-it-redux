// import { Button } from 'bootstrap'
import {useDispatch} from 'react-redux'
import React, { useState } from 'react'
import { Form, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { search, setResults } from '../redux/search/actions'

function Search() {

    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(search(searchText))
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${searchText}`)
        .then(res => res.json())
        .then(data => {
            if (data.Error) {
                alert(data.Error)
                return
            }
            dispatch(setResults(data.Search))
        })
    }

    return (
        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <p>
        //             <input type='text' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
        //             <button type='submit'>Submit</button>
        //         </p>
        //     </form>
        // </div>

        <Container className="mb-5">
            <Row className="justify-content-center">
                <Col sm={12} md={10} lg={8} xl={7} xxl={6}>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search for movies"
                                aria-label="Search"
                                aria-describedby="search"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <Button variant="primary" id="search" type='submit'>
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Search