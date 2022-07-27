import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { buscarNome, buscarPorRaridade } = this.props;
    return (
      <div>
        <div className="buscarCarta">
          <input type="text" data-testid="name-filter" onChange={ buscarNome } />
          <select data-testid="rare-filter" onChange={ buscarPorRaridade }>
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </div>
        <div>
          <label htmlFor="super">
            <input type="checkbox" id="super" data-testid="trunfo-filter" />
            Super trunfo
          </label>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  buscarNome: PropTypes.func.isRequired,
  buscarPorRaridade: PropTypes.func.isRequired,
};

export default Filter;
