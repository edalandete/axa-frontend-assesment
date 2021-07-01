import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadOrcs from '../../redux/actions/actionCreators';

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
                <li>
                  <img src={orc.thumbnail} alt={orc.name} />
                  <p>{orc.name}</p>

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
