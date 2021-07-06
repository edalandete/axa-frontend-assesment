import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import './orcDetail.scss';
import { getOrcById, getSelectedOrcFriends } from '../../redux/selectors/orcsSelector';

function OrcDetail() {
  const orcs = useSelector((store) => store.orcs);
  const history = useHistory();
  const { id } = useParams();
  const selectedOrc = getOrcById(orcs, id);
  const orcFriends = getSelectedOrcFriends(selectedOrc, orcs);
  return (
    <main>
      <h1>
        {' '}
        {selectedOrc.name}
        {' '}
        Detail
      </h1>
      <div className="orc-details">
        <div className="image-container">
          <img src={selectedOrc.thumbnail} alt={selectedOrc.name} className="profile-picture" />
        </div>
        <ul className="orc-details__data">
          <li className="data__item">
            <p>
              <span className="badge">Name: </span>
              {selectedOrc.name}

            </p>
          </li>
          <li className="data__item">
            <p>
              <span className="badge">Age: </span>
              {selectedOrc.age}

            </p>
          </li>
          <li className="data__item">
            <p>
              <span className="badge">Height: </span>
              {selectedOrc.weight}

            </p>
          </li>
          <li className="data__item">
            <p>
              <span className="badge">Weight: </span>
              {selectedOrc.height}

            </p>
          </li>
          <li className="data__item">
            <p>
              <span className="badge">Hair Color: </span>
              {selectedOrc.hair_color}

            </p>
          </li>
          <li className="data__item">
            <p>
              <span className="badge">Professions: </span>
              {selectedOrc.professions && selectedOrc.professions.map((profession) => (
                <span>
                  { profession }
                  {' '}
                </span>
              ))}

            </p>
          </li>
          <li className="data__item">
            <p>
              <span className="badge">Friends: </span>
              {orcFriends.length ? orcFriends.map((friend) => (
                <Link to={`/${friend.id}`} className="links">
                  { friend.name }
                  {' '}
                </Link>
              ))
                : <span>No friends</span>}

            </p>
          </li>
        </ul>
        <button type="button" onClick={history.goBack} className="buttons buttons--back"> Go Back </button>
      </div>
    </main>
  );
}

export default OrcDetail;
