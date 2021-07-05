import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadOrcs from '../../redux/actions/actionCreators';
import './orcsList.scss';

function OrcsList({ orcs, dispatch }) {
  useEffect(() => {
    if (!orcs.length) dispatch(loadOrcs());
  }, []);
  return (
    <main>
      <h1>Orcs List</h1>
      <ul className="orcs-list">
        {
              orcs && orcs.map((orc) => (
                <li className="orcs-list__item" key={orc.id}>
                  <Link to={`/${orc.id}`}>
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

OrcsList.propTypes = {
  orcs: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ orcs }) {
  return {
    orcs
  };
}
export default connect(mapStateToProps)(OrcsList);
