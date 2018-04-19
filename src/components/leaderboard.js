import React from 'react';
import PropTypes from 'prop-types';

const Leaderboard = (props, { authUser }) => {
  return (
    <div>
      { authUser && <div>What</div> }
      <h1>Leaderboard</h1>
    </div>
  )
}

Leaderboard.contextTypes = {
  authUser: PropTypes.object,
};

export default Leaderboard;