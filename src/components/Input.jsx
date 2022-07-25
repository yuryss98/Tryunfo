import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <label htmlFor="nomeDaCarta">
          Nome da carta
          <br />
          <input type="text" name="" id="nomeDaCarta" data-testid="name-input" />
        </label>
        <br />
        <br />

        <label htmlFor="descricaoDaCarta">
          Descrição da carta
          <br />
          <textarea
            name=""
            id="descricaoDaCarta"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <br />
        <br />

        <label htmlFor="primeiroAtributo">
          Atributo 1
          <br />
          <input type="number" name="" id="primeiroAtributo" data-testid="attr1-input" />
        </label>
        <br />
        <br />

        <label htmlFor="segundoAtributo">
          Atributo 2
          <br />
          <input type="number" name="" id="segundoAtributo" data-testid="attr2-input" />
        </label>
        <br />
        <br />

        <label htmlFor="terceiroAtributo">
          Atributo 3
          <br />
          <input type="number" name="" id="terceiroAtributo" data-testid="attr3-input" />
        </label>
        <br />
        <br />

        <label htmlFor="imagemDaCarta">
          Imagem
          <br />
          <input type="text" name="" id="imagemDaCarta" data-testid="image-input" />
        </label>
        <br />
        <br />

        <label htmlFor="raridadeCarta">
          Raridade
          <br />
          <select name="" id="raridadeCarta" data-testid="rare-input">
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
            name=""
            id="superTrunfo"
            data-testid="trunfo-input"
          />
        </label>
        <br />
      </div>
    );
  }
}

export default Input;
