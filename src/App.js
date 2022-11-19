import React, { useState } from "react";
import './style.css'
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, DownOutlined } from '@ant-design/icons'

const options = [
  {
    name: "Twitter",
    icon: <TwitterOutlined />
  },
  {
    name: "Facebook",
    icon: <FacebookOutlined />
  },
  {
    name: "Instagram",
    icon: <InstagramOutlined />
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelect] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onSelected = value => () => {
    setSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className="select" onClick={toggling}>
        { selected !== null ? <>{selected.icon} <h5>{selected.name}</h5></> : "Selecciona" }
        <DownOutlined />
        
        {isOpen && (
          <div className="DropDownList">
            {options.map(option => (
              <div className="ListItem" key={Math.random()} onClick={onSelected(option)}>
                {option.icon}
                <h5>{option.name}</h5>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}