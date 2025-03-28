import useFetchMovies from '../../hooks/useFetchMovies';

import './Movies.css';

const Movies = () => {

    // Get the Movie data
    const { data, isLoading, error }  = useFetchMovies();

    if(isLoading) return (<h2>...fecthing data. Please wait.</h2>)
    if(error) return (<h2>There was an error fetching data</h2>);

    console.log(data);

    return (
        <>
            <h2>Movies</h2>
        </>
    )

};

export default Movies;