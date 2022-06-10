import React from "react"

export const ViewMovieDetails = ({movie}) => {
    console.log(movie)
    const { id, src = NotFoundImg, title, year, runtime, overview, rating, genres } = movie;
    const  runtimeToHours = (runtime) => {

        let hours = (runtime / 60 + "").split(".")[0];
        let monutes = "20"
        return `${hours}h ${monutes}min`
    }

    const  extractYear = (val) => {
        return val.split("-")[0]
    }
    return (
        <div className="view-movie-details">
            <img src={src} onContextMenu={(e) => contextMenuHandler(e)}></img>
            <div>
                <div>
                    <div className="view-movie-details-header">
                        <div className="view-movie-details-title">{title}</div>
                        <div className="view-movie-details-rating">{rating}</div>
                    </div>
                    <div className="movie-preview-gender">{genres.join(' & ')}</div>
                </div>
                <div className="view-movie-details-header view-movie-details-movie-info">
                    <h4>{extractYear(year)}</h4>
                    <h4>{runtimeToHours(runtime)}</h4>
                </div>
                <div className="view-movie-details-overview">{overview}</div>                
            </div>
        </div>
    )
}