import React from 'react'
import './FeaturedMovie.css'

export default ({item}) => {
    console.log(item)

    console.log("Letras" + item.overview.length)
    let textoCortado = 0

    if (item.overview.length > 350) {
        textoCortado = item.overview.length - 350
    }

    let firstDate = new Date(item.first_air_date)
    let genres = []
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">Nota: {item.vote_average}</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} {item.number_of_seasons !== 1 ? "temporadas" : "temporada"}</div>
                        <div className="featured--description">{item.overview.length > 350 ? item.overview.substring(textoCortado, item.overview.length - 10).concat('...') : item.overview}</div>
                        <div className="featured--buttons">
                            <a className="featured--watchbutton" href={`/watch/${item.id}`}>Assistir</a>
                            <a className="featured--mylistbutton" href={`/list/add/${item.id}`}>+ Minha Lista</a>
                        </div>
                        <div className="featured--genres"><strong>Genero:</strong> {genres.join(', ')}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}