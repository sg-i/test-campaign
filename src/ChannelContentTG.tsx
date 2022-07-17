import React, { FunctionComponent } from 'react';

import { ButtonKeyboard } from './ButtonKeyboard';
type ChannelContentTGProps = {
  setTgKeyboardType: (e: any) => void;
  handleRemoveButtonTG: (e: any) => void;
  tgButtons: any;
  AddTextButtonTG: (e: any) => void;
  AddLinkButtonTG: (e: any) => void;
  tgKeyboardType: any;
  setTgVisible: (e: any) => void;
  tgTextChange: any;
  setTgTextChange: (e: any) => void;
};
export const ChannelContentTG: FunctionComponent<ChannelContentTGProps> = ({
  setTgKeyboardType,
  handleRemoveButtonTG,
  tgButtons,
  AddLinkButtonTG,
  AddTextButtonTG,
  tgKeyboardType,
  setTgVisible,
  tgTextChange,
  setTgTextChange,
}) => {
  return (
    <div className="channel-item">
      <div className="buttonKeyboardHeader">
        <span>Telegram</span>
        <svg
          onClick={() => setTgVisible(false)}
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
          onChange={(e) => setTgTextChange(e.target.value)}
          value={tgTextChange}
          maxLength={4096}
          rows={20}
          className="textareaCustom"></textarea>
        <div>
          <div>Клавиатура</div>
          <div>
            <label>
              <input
                defaultChecked
                onClick={() => setTgKeyboardType('standart')}
                type="radio"
                name="tginput"
                value="yes"
              />
              Стандартное отображение
            </label>
          </div>
          <div>
            <label>
              <input
                onClick={() => setTgKeyboardType('inline')}
                type="radio"
                name="tginput"
                value="yes"
              />
              inline-отображение
            </label>
          </div>
          <div className="keyboard-buttons">
            <div
              style={tgKeyboardType === 'standart' ? { width: '100%' } : {}}
              className="buttton-for-keyboard"
              onClick={AddTextButtonTG}>
              Добавить кнопку с быстрым ответом
            </div>
            {tgKeyboardType === 'inline' ? (
              <div className="buttton-for-keyboard" onClick={AddLinkButtonTG}>
                Добавить кнопку с ссылкой
              </div>
            ) : null}
          </div>

          <div>
            {tgButtons.length > 0 ? (
              tgButtons.map((el: any) => {
                return (
                  <ButtonKeyboard
                    tgKeyboardType={tgKeyboardType}
                    key={el.title + el.typeButton + el.date}
                    el={el}
                    handleRemoveButton={handleRemoveButtonTG}
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
