import React from "react";
import { TKeyValue } from '../ts-types/movie';
import { useNavigate } from 'react-router-dom';
import { useSearchParams, useLocation } from 'react-router-dom';

export const GenreMenuPanel = ({genres} : {genres:Array<TKeyValue>}) => {

    const [queryParams, setQueryParams] = useSearchParams();
    const genre = queryParams.get('genre') || "All";
    const sortBy = queryParams.get('sortBy') || "Title";
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div id="menu-panel-genres">
            <select size={genres.length} value={genre || genres[0].value} onChange={() => {}}>
              {genres.map((genre) => {
                return (
                  <React.Fragment key={genre.key}>
                    <option
                      className="menu-panel-gender"
                      onClick={(e) =>
                        navigate(
                          `${location.pathname}?sortBy=${sortBy}&genre=${
                            (e.target as HTMLHtmlElement).textContent
                          }`
                        )
                      }
                    >
                      {genre.value}
                    </option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>
    )
}