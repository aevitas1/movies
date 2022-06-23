function MovieDetails(item) {
    return (
        <div className='card_wrapper'>
            <div className="card_body">
                <div className="card_overlay">
                    <img src={
                        item.item.poster_path ?
                            `${IMAGE_BASE_URL}${POSTER_SIZE}${item.item.poster_path}`
                            : NoImage} alt={`Poster of ${item.item.title}`} clickable='false'/>
                </div>
                <div data-rating={item.item.vote_average} className="card_rating"></div>
            </div>
        </div>
    )
}

export default MovieDetails
