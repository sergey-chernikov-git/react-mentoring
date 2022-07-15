import React from 'react';
import { useNavigate } from "react-router-dom";
import { TMenuPanelProps } from '../ts-types/props'; 
import { useSearchParams, useLocation} from 'react-router-dom'; 

export const MenuPanel = ({ genres, sortList }: TMenuPanelProps) => {
  const [queryParams, setQueryParams] = useSearchParams();

  const  sortBy = queryParams.get('sortBy');
  const  genre = queryParams.get('genre');
  const location = useLocation()
  const navigate = useNavigate();
  return (
    <>
      <div className="horisontal-line"></div>
      <div className="menu-panel">
        <div className="gender-menu-panel">
          <div id="menu-panel-genres">
            <select size={genres.length}  value={ genre || genres[0].value } onChange={()=>{}}>
              {genres.map((genre) => {
                return (
                  <React.Fragment key={genre.key}>
                    <option
                      className="menu-panel-gender" 
                      onClick={(e) =>  navigate(`${location.pathname}?sortBy=${sortBy}genre=${(e.target as HTMLHtmlElement).textContent}`)}
                    >
                      {genre.value}
                    </option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>
          <div className="menu-panel-sort">
            <div className="menu-panel-gender">Sort by</div>
            <div className="menu-panel-select">
              <select
                className="dropdown-content"
                id="dropdown-sorting-content"
                name="genres"
                onChange={(e) => {
                  navigate(`${location.pathname}?sortBy=${e.target.value}&genre=${genre}`);
                }}
                value={sortBy || "" }
              >
                {sortList.map((el) => {
                  return (
                    <option key={el.key} value={el.value}>
                      {el.value}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-horisontal-splitter"></div>
    </>
  );
};
