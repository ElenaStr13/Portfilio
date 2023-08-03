//import { Children } from 'react';
import './button.scss';

function Button({ title, type, onClick, color }) {

  return (<>
    <button onClick={onClick} type={type} className={`${color}`}>{title}</button>
  </>
  )
}

export default Button;