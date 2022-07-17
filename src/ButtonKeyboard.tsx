import React, { FunctionComponent } from 'react';
type BunntonKeyboardProps = {
  tgKeyboardType?: any;
  waKeyboardType?: any;
  el: any;
  handleRemoveButton: (e: any) => void;
};
export const ButtonKeyboard: FunctionComponent<BunntonKeyboardProps> = ({
  el,
  handleRemoveButton,
}) => {
  return (
    <div className="buttonKeyboardWrapper">
      <div className="buttonKeyboardHeader">
        {el.typeButton === 'textButton' ? 'Кнопка с быстрым ответом' : 'Кнопка с ссылкой'}
        <svg
          onClick={() => handleRemoveButton(el)}
          style={{ marginTop: '5px', cursor: 'pointer' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="23px"
          height="23px">
          <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" />
          <path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" />
        </svg>
      </div>
      {el.typeButton === 'textButton' ? (
        <div>{`Текст: ${el.title}`}</div>
      ) : (
        <div>
          <div>{`Текст: ${el.title}`}</div>
          <div>{`Ссылка: ${el.link}`}</div>
        </div>
      )}
      <div></div>
    </div>
  );
};
