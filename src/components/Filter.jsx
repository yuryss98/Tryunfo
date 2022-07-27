import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { buscarNome, buscarPorRaridade, desabilitar, onChangeInputs } = this.props;
    return (
      <div>
        <div className="buscarCarta">
          <input
            type="text"
            data-testid="name-filter"
            disabled={ desabilitar }
            onChange={ buscarNome }
          />
          <select
            data-testid="rare-filter"
            disabled={ desabilitar }
            onChange={ buscarPorRaridade }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </div>
        <div>
          <label htmlFor="super">
            <input
              type="checkbox"
              id="super"
              onChange={ onChangeInputs }
              data-testid="trunfo-filter"
            />
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
  desabilitar: PropTypes.bool.isRequired,
  onChangeInputs: PropTypes.func.isRequired,
};

export default Filter;
