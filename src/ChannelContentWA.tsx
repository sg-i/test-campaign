import React, { FunctionComponent } from 'react';

import { ButtonKeyboard } from './ButtonKeyboard';
type ChannelContentWAProps = {
  setWaKeyboardType: (e: any) => void;
  handleRemoveButtonWA: (e: any) => void;
  waButtons: any;
  AddTextButtonWA: (e: any) => void;
  AddLinkButtonWA: (e: any) => void;
  waKeyboardType: any;
  setWaVisible: (e: any) => void;
  waTextChange: any;
  setWaTextChange: (e: any) => void;
};
export const ChannelContentWA: FunctionComponent<ChannelContentWAProps> = ({
  setWaKeyboardType,
  handleRemoveButtonWA,
  waButtons,
  AddLinkButtonWA,
  AddTextButtonWA,
  setWaVisible,
  waKeyboardType,
  waTextChange,
  setWaTextChange,
}) => {
  return (
    <div className="channel-item">
      <div className="buttonKeyboardHeader">
        <span>Whats App</span>
        <svg
          onClick={() => setWaVisible(false)}
          style={{ marginTop: '3px', cursor: 'pointer' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="23px"
          height="23px">
          <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" />
          <path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" />
        </svg>
      </div>
      <div>
        <textarea
          onChange={(e) => setWaTextChange(e.target.value)}
          value={waTextChange}
          maxLength={1000}
          rows={20}
          className="textareaCustom"></textarea>
        <div>
          <div>Клавиатура</div>
          <div>
            <label>
              <input
                defaultChecked
                onClick={() => setWaKeyboardType('standart')}
                type="radio"
                name="wainput"
                value="yes"
              />
              Стандартное отображение
            </label>
          </div>
          <div>
            <label>
              <input
                onClick={() => setWaKeyboardType('inline')}
                type="radio"
                name="wainput"
                value="yes"
              />
              inline-отображение
            </label>
          </div>

          <div className="keyboard-buttons">
            <div
              style={waKeyboardType === 'standart' ? { width: '100%' } : {}}
              onClick={AddTextButtonWA}
              className="buttton-for-keyboard">
              Добавить кнопку с быстрым ответом
            </div>
            {waKeyboardType === 'inline' ? (
              <div className="buttton-for-keyboard" onClick={AddLinkButtonWA}>
                Добавить кнопку с ссылкой
              </div>
            ) : null}
          </div>
          <div>
            {waButtons.length > 0 ? (
              waButtons.map((el: any) => {
                return (
                  <ButtonKeyboard
                    waKeyboardType={waKeyboardType}
                    key={el.title + el.typeButton + el.date}
                    el={el}
                    handleRemoveButton={handleRemoveButtonWA}
                  />
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
