import React, { FunctionComponent } from 'react';

import { ButtonKeyboard } from './ButtonKeyboard';
type ChannelContentVKProps = {
  setVkKeyboardType: (e: any) => void;
  handleRemoveButtonVK: (e: any) => void;
  vkButtons: any;
  AddTextButtonVK: (e: any) => void;
  AddLinkButtonVK: (e: any) => void;
  vkKeyboardType: any;
  setVkVisible: (e: any) => void;
  vkTextChange: any;
  setVkTextChange: (e: any) => void;
};
export const ChannelContentVK: FunctionComponent<ChannelContentVKProps> = ({
  setVkKeyboardType,
  handleRemoveButtonVK,
  vkButtons,
  AddLinkButtonVK,
  AddTextButtonVK,
  vkKeyboardType,
  setVkVisible,
  setVkTextChange,
  vkTextChange,
}) => {
  return (
    <div className="channel-item">
      <div className="buttonKeyboardHeader">
        <span>ВКонтакте</span>
        <svg
          onClick={() => setVkVisible(false)}
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
          onChange={(e) => setVkTextChange(e.target.value)}
          value={vkTextChange}
          maxLength={4096}
          rows={20}
          className="textareaCustom"></textarea>
        <div>
          <div>Клавиатура</div>
          <div>
            <label>
              <input
                defaultChecked
                onClick={() => setVkKeyboardType('standart')}
                type="radio"
                name="vkinput"
                value="yes"
              />
              Стандартное отображение
            </label>
          </div>
          <div>
            <label>
              <input
                onClick={() => setVkKeyboardType('inline')}
                type="radio"
                name="vkinput"
                value="yes"
              />
              inline-отображение
            </label>
          </div>
          <div className="keyboard-buttons">
            <div className="buttton-for-keyboard" onClick={AddTextButtonVK}>
              Добавить кнопку с быстрым ответом
            </div>
            <div className="buttton-for-keyboard" onClick={AddLinkButtonVK}>
              Добавить кнопку с ссылкой
            </div>
          </div>
          <div>
            {vkButtons.length > 0 ? (
              vkButtons.map((el: any) => {
                return (
                  <ButtonKeyboard
                    key={el.title + el.typeButton + el.date}
                    el={el}
                    handleRemoveButton={handleRemoveButtonVK}
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
