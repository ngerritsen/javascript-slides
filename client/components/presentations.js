import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import '../styles/presentations.scss';

function Presentations({ presentations }) {
  return (
    <ul className="presentations">
      {presentations.map(presentation =>
        <li key={presentation} className="presentations__item">
          <Link to={`/${presentation}/0`} className="presentations__link">
            {presentation}
          </Link>
        </li>
      )}
    </ul>
  );
}

Presentations.propTypes = {
  presentations: PropTypes.array.isRequired
};

function mapStateToProps({ presentations }) {
  return { presentations };
}

export default connect(mapStateToProps)(Presentations);
