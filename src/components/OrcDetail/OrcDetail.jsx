import React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import getOrc from '../../redux/selectors/orcsSelectors';
import './orcDetail.scss';

function OrcDetail({ orcs }) {
  const { id } = useParams();
  const selectedOrc = useSelector(getOrc(orcs, id));
  return (
    <main>
      <h1>
        {' '}
        {selectedOrc.name}
        {' '}
        Detail
      </h1>

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
