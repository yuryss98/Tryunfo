import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="nomeDaCarta">
          Nome da carta
          <br />
          <input
            type="text"
            name="nameInput"
            id="nomeDaCarta"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="descricaoDaCarta">
          Descrição da carta
          <br />
          <textarea
            name="descriptionInput"
            id="descricaoDaCarta"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="primeiroAtributo">
          Atributo 1
          <br />
          <input
            type="number"
            name="primeiroAtributo"
            id="primeiroAtributo"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="segundoAtributo">
          Atributo 2
          <br />
          <input
            type="number"
            name="segundoAtributo"
            id="segundoAtributo"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="terceiroAtributo">
          Atributo 3
          <br />
          <input
            type="number"
            name="terceiroAtributo"
            id="terceiroAtributo"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="imagemDaCarta">
          Imagem
          <br />
          <input
            type="text"
            name="imagemDaCarta"
            id="imagemDaCarta"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="raridadeCarta">
          Raridade
          <br />
          <select
            name="raridadeCarta"
            id="raridadeCarta"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <br />

        <label htmlFor="superTrunfo">
          Super trunfo
          <br />
          <input
            type="checkbox"
            name="cardTrunfo"
            id="superTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <button
          name="saveButton"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
