/* eslint-disable no-debugger */
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { getOrcById, getOrcsByName } from '../../redux/selectors/orcsSelectors';
import './orcDetail.scss';

function OrcDetail({ orcs }) {
  // const history = useHistory();
  const { id } = useParams();
  const selectedOrc = useSelector(getOrcById(orcs, id));
  debugger;
  const orcFriends = selectedOrc.friends.length
    ? useSelector(getOrcsByName(orcs, selectedOrc.friends))
    : [];

  console.log('orc friends', orcFriends);
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
          {/* <li className="data__item">
            <p>
              <span className="badge">Friends: </span>
              {orcFriends.length ? orcFriends.map((friend) => (
                <Link to={`/${friend.id}`}>
                  { friend.name }
                  {' '}
                </Link>
              ))
                : <span>No friends</span>}

            </p>
          </li> */}
          <Link to="/633">
            {' ir ya'}
          </Link>
        </ul>
      </div>
      {/* <button type="button" onClick={history.goBack}> go back </button> */}
    </main>
  );
}

OrcDetail.propTypes = {
  orcs: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

function mapStateToProps({ orcs }) {
  return {
    orcs
  };
}
export default connect(mapStateToProps)(OrcDetail);
