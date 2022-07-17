import React, { FunctionComponent } from 'react';

type ChannelContentSMSProps = {
  setSmsVisible: (e: any) => void;
  smsTextChange: any;
  setSmsTextChange: (e: any) => void;
};
export const ChannelContentSMS: FunctionComponent<ChannelContentSMSProps> = ({
  setSmsVisible,
  smsTextChange,
  setSmsTextChange,
}) => {
  return (
    <div className="channel-item">
      <div className="buttonKeyboardHeader">
        <span>SMS</span>
        <svg
          onClick={() => setSmsVisible(false)}
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
          onChange={(e) => setSmsTextChange(e.target.value)}
          value={smsTextChange}
          maxLength={1000}
          rows={20}
          className="textareaCustom"></textarea>
      </div>
    </div>
  );
};
