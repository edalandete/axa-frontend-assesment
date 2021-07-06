import React, {
  useEffect, useState
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadOrcs, filterOrcs } from '../../redux/actions/actionCreators';
import './orcsList.scss';

function OrcsList() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const orcs = useSelector((store) => store.orcs);
  const filteredOrcs = useSelector((store) => store.filteredOrcs);

  useEffect(() => {
    if (!orcs.length) {
      dispatch(loadOrcs());
    }
  }, []);

  const handleInputChange = (event) => setSearchValue(event.target.value);

  const filterValues = () => dispatch(filterOrcs(orcs, searchValue));

  const clearFilter = () => dispatch(filterOrcs(orcs));

  return (
    <main>
      <h1>Orcs List</h1>
      <section className="filter-form">
        <input
          type="text"
          name="filterText"
          className="filter-text"
          placeholder="Search"
          onChange={handleInputChange}
          value={searchValue}
        />
        <button type="button" onClick={filterValues} className="buttons buttons--search">Search</button>
        <button type="button" onClick={clearFilter} className="buttons buttons--clear">Clear</button>
      </section>

      <ul className="orcs-list">
        {
              filteredOrcs && filteredOrcs.map((orc) => (
                <li className="orcs-list__item" key={orc.id}>
                  <Link to={`/${orc.id}`} data-testid={orc.id}>
                    <div>
                      <img src={orc.thumbnail} alt={orc.name} className="thumbnail" />
                    </div>
                    <p>{orc.name}</p>
                  </Link>
                </li>
              ))
          }
      </ul>
    </main>
  );
}

export default (OrcsList);
