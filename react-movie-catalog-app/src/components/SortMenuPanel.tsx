import React from "react";
import { TKeyValue } from '../ts-types/movie';
import { useNavigate } from 'react-router-dom';
import { useSearchParams, useLocation } from 'react-router-dom';

export const SortMenuPanel = ({sortList} : {sortList: Array<TKeyValue>}) => {

    const [queryParams, setQueryParams] = useSearchParams();
    const genre = queryParams.get('genre');
    const sortBy = queryParams.get('sortBy');
    const location = useLocation();
    const navigate = useNavigate();

return (
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
        value={sortBy || ''}
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
)
}