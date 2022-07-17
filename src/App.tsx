import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChannelContentVK } from './ChannelContentVK';
import { ChannelContentTG } from './ChannelContentTG';
import { ChannelContentWA } from './ChannelContentWA';
import { ChannelContentSMS } from './ChannelContentSMS';
function App() {
  const [vkTextChange, setVkTextChange] = useState('');
  const [tgTextChange, setTgTextChange] = useState('');
  const [waTextChange, setWaTextChange] = useState('');
  const [smsTextChange, setSmsTextChange] = useState('');

  const [vkVisible, setVkVisible] = useState(false);
  const [tgVisible, setTgVisible] = useState(false);
  const [waVisible, setWaVisible] = useState(false);
  const [smsVisible, setSmsVisible] = useState(false);
  const [vkKeyboardType, setVkKeyboardType] = useState('standart');
  const [vkButtons, setVkButtons] = useState<
    { typeButton: string; title: string; link?: string; date: Number }[]
  >([]);
  const [tgKeyboardType, setTgKeyboardType] = useState('standart');
  const [tgButtons, setTgButtons] = useState<
    { typeButton: string; title: string; link?: string; date: Number }[]
  >([]);
  const [waKeyboardType, setWaKeyboardType] = useState('standart');
  const [waButtons, setWaButtons] = useState<
    { typeButton: string; title: string; link?: string; date: Number }[]
  >([]);

  useEffect(() => {
    setVkButtons([]);
  }, [vkKeyboardType, vkVisible]);
  useEffect(() => {
    setTgButtons([]);
  }, [tgKeyboardType, tgVisible]);
  useEffect(() => {
    setWaButtons([]);
  }, [waKeyboardType, waVisible]);
  useEffect(() => {
    setWaButtons([]);
  }, [smsVisible]);

  //vk
  function AddTextButtonVK() {
    if (vkKeyboardType === 'standart') {
      if (vkButtons.length < 40) {
        const title = prompt('Введите название кнопки');
        if (title?.length === 0) {
          alert('Введите название кнопки!');
        } else {
          if (title != null) {
            setVkButtons([
              ...vkButtons,
              { typeButton: 'textButton', title: title, date: Date.now() },
            ]);
          }
        }
      } else {
        alert('Для стандартного отображения клавиатуры максимальное количество кнопок: 40');
      }
    } else {
      if (vkButtons.length < 10) {
        const title = prompt('Введите название кнопки');
        if (title?.length === 0) {
          alert('Введите название кнопки!');
        } else {
          if (title != null) {
            setVkButtons([
              ...vkButtons,
              { typeButton: 'textButton', title: title, date: Date.now() },
            ]);
          }
        }
      } else {
        alert('Для inline-отображения клавиатуры максимальное количество кнопок: 10');
      }
    }
  }
  function AddLinkButtonVK() {
    if (vkKeyboardType === 'standart') {
      if (vkButtons.length < 40) {
        const title = prompt('Введите название кнопки');
        if (title?.length === 0) {
          alert('Введите название кнопки!');
        } else {
          const link = prompt('Введите ссылку для кнопки');
          if (title?.length === 0) {
            alert('Введите ссылку для кнопки!');
          } else {
            if (title != null && link != null) {
              setVkButtons([
                ...vkButtons,
                { typeButton: 'linkButton', title: title, link: link, date: Date.now() },
              ]);
            }
          }
        }
      } else {
        alert('Для стандартного отображения клавиатуры максимальное количество кнопок: 40');
      }
    } else {
      if (vkButtons.length < 10) {
        const title = prompt('Введите название кнопки');
        if (title?.length === 0) {
          alert('Введите название кнопки!');
        } else {
          const link = prompt('Введите ссылку для кнопки');
          if (title?.length === 0) {
            alert('Введите ссылку для кнопки!');
          } else {
            if (title != null && link != null) {
              setVkButtons([
                ...vkButtons,
                { typeButton: 'linkButton', title: title, link: link, date: Date.now() },
              ]);
            }
          }
        }
      } else {
        alert('Для inline-отображения клавиатуры максимальное количество кнопок: 10');
      }
    }
  }
  function handleRemoveButtonVK(e: any) {
    const date = e.date;
    setVkButtons(vkButtons.filter((item) => item.date !== date));
  }

  //tg
  function AddTextButtonTG() {
    let title = prompt('Введите название кнопки');
    if (title?.length === 0) {
      alert('Введите название кнопки!');
    } else {
      if (tgKeyboardType === 'inline') {
        if (title != null) {
          if (title?.length > 64) {
            alert('Максимальная длина названия кнопки: 64');
          } else {
            setTgButtons([
              ...tgButtons,
              { typeButton: 'textButton', title: title, date: Date.now() },
            ]);
          }
        }
      } else {
        if (title != null) {
          setTgButtons([
            ...tgButtons,
            { typeButton: 'textButton', title: title, date: Date.now() },
          ]);
        }
      }
    }
  }
  function AddLinkButtonTG() {
    const title = prompt('Введите название кнопки');
    if (title != null) {
      if (title?.length === 0) {
        alert('Введите название кнопки!');
      } else {
        if (title.length <= 64) {
          const link = prompt('Введите ссылку для кнопки');
          if (link?.length === 0) {
            alert('Введите ссылку!');
          } else {
            if (title != null && link != null) {
              setTgButtons([
                ...tgButtons,
                { typeButton: 'linkButton', title: title, link: link, date: Date.now() },
              ]);
            }
          }
        } else {
          alert('Максимальная длина названия кнопки: 64');
        }
      }
    }
  }
  function handleRemoveButtonTG(e: any) {
    const date = e.date;
    setTgButtons(tgButtons.filter((item) => item.date !== date));
  }

  //wa
  function AddTextButtonWA() {
    if (waKeyboardType === 'standart') {
      if (waButtons.length < 10) {
        let title = prompt('Введите название кнопки');
        if (title != null) {
          if (title?.length === 0) {
            alert('Введите название кнопки!');
          } else {
            if (title?.length <= 20) {
              setWaButtons([
                ...waButtons,
                { typeButton: 'textButton', title: title, date: Date.now() },
              ]);
            } else {
              alert('Максимальная длина текста кнопки: 20');
            }
          }
        }
      } else {
        alert('Максимальное количество кнопок для стандартного отображения: 10');
      }
    } else {
      if (waButtons.length < 3) {
        let title = prompt('Введите название кнопки');
        if (title != null) {
          if (title?.length === 0) {
            alert('Введите название кнопки!');
          } else {
            if (title?.length <= 20) {
              setWaButtons([
                ...waButtons,
                { typeButton: 'textButton', title: title, date: Date.now() },
              ]);
            } else {
              alert('Максимальная длина текста кнопки: 20');
            }
          }
        }
      } else {
        alert('Максимальное количество кнопок для inline-отображения: 3');
      }
    }
  }
  function AddLinkButtonWA() {
    if (waButtons.length < 3) {
      let countLinks = 0;
      waButtons.forEach((element) => {
        if (element.typeButton === 'linkButton') {
          countLinks += 1;
        }
      });

      if (countLinks === 0) {
        const title = prompt('Введите название кнопки');
        if (title != null) {
          if (title?.length === 0) {
            alert('Введите название кнопки!');
          } else {
            if (title.length <= 20) {
              const link = prompt('Введите ссылку для кнопки');
              if (link?.length === 0) {
                alert('Введите ссылку!');
              } else {
                if (title != null && link != null) {
                  setWaButtons([
                    ...waButtons,
                    { typeButton: 'linkButton', title: title, link: link, date: Date.now() },
                  ]);
                }
              }
            } else {
              alert('Максимальная длина названия кнопки: 20');
            }
          }
        }
      } else {
        alert('Может быть только 1 кнопка-ссылка');
      }
    } else {
      alert('Максимальное количество кнопок для inline-отображения: 3');
    }
  }
  function handleRemoveButtonWA(e: any) {
    const date = e.date;
    setWaButtons(waButtons.filter((item) => item.date !== date));
  }

  function saveData() {
    let data: any = {};
    let prepvk: any = {};
    let preptg: any = {};
    let prepwa: any = {};
    let prepsms: any = {};
    // vkVisible && data['vk']= {text: vkTextChange
    if (vkVisible) {
      if (vkTextChange) {
        prepvk['text'] = vkTextChange;
      }
      if (vkButtons.length > 0) {
        prepvk['keyboard'] = { typeKeyboard: vkKeyboardType, buttons: vkButtons };
      }
      data['vk'] = prepvk;
    }
    if (tgVisible) {
      if (tgTextChange) {
        preptg['text'] = tgTextChange;
      }
      if (tgButtons.length > 0) {
        preptg['keyboard'] = { typeKeyboard: tgKeyboardType, buttons: tgButtons };
      }
      data['tg'] = preptg;
    }
    if (waVisible) {
      if (waTextChange) {
        prepwa['text'] = waTextChange;
      }
      if (waButtons.length > 0) {
        prepwa['keyboard'] = { typeKeyboard: waKeyboardType, buttons: waButtons };
      }
      data['wa'] = prepwa;
    }
    if (smsVisible) {
      if (smsTextChange) {
        prepsms['text'] = smsTextChange;
      }

      data['sms'] = prepsms;
    }
    axios
      .post('/addCampaign', data)
      .then(function (res) {})
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <div className="header">
        <div className="addChannel">
          <span className="addChannel-title">Добавить канал:</span>
          <div onClick={() => setVkVisible(!vkVisible)} className="addChannel-item">
            ВКонтакте
          </div>
          <div onClick={() => setTgVisible(!tgVisible)} className="addChannel-item">
            Telegram
          </div>
          <div onClick={() => setWaVisible(!waVisible)} className="addChannel-item">
            WhatsApp
          </div>
          <div onClick={() => setSmsVisible(!smsVisible)} className="addChannel-item">
            SMS
          </div>
        </div>

        <div onClick={saveData} className="buttonSave">
          Сохранить
        </div>
      </div>
      <div className="channels">
        {vkVisible ? (
          <ChannelContentVK
            vkTextChange={vkTextChange}
            setVkTextChange={setVkTextChange}
            setVkVisible={setVkVisible}
            vkKeyboardType={vkKeyboardType}
            vkButtons={vkButtons}
            setVkKeyboardType={setVkKeyboardType}
            AddTextButtonVK={AddTextButtonVK}
            AddLinkButtonVK={AddLinkButtonVK}
            handleRemoveButtonVK={handleRemoveButtonVK}
          />
        ) : null}
        {tgVisible ? (
          <ChannelContentTG
            tgTextChange={tgTextChange}
            setTgTextChange={setTgTextChange}
            setTgVisible={setTgVisible}
            tgKeyboardType={tgKeyboardType}
            tgButtons={tgButtons}
            setTgKeyboardType={setTgKeyboardType}
            AddTextButtonTG={AddTextButtonTG}
            AddLinkButtonTG={AddLinkButtonTG}
            handleRemoveButtonTG={handleRemoveButtonTG}
          />
        ) : null}
        {waVisible ? (
          <ChannelContentWA
            waTextChange={waTextChange}
            setWaTextChange={setWaTextChange}
            setWaVisible={setWaVisible}
            waKeyboardType={waKeyboardType}
            waButtons={waButtons}
            setWaKeyboardType={setWaKeyboardType}
            AddTextButtonWA={AddTextButtonWA}
            AddLinkButtonWA={AddLinkButtonWA}
            handleRemoveButtonWA={handleRemoveButtonWA}
          />
        ) : null}

        {smsVisible ? (
          <ChannelContentSMS
            smsTextChange={smsTextChange}
            setSmsTextChange={setSmsTextChange}
            setSmsVisible={setSmsVisible}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
