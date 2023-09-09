import PropTypes from 'prop-types'; // типізація компонента
import css from './ItTip.module.css'; // стилізація

import  {AiFillInfoCircle}  from 'react-icons/ai';


export const ItTip = ({ message }) => {
    return <code className={css.itTip}>
    <AiFillInfoCircle className={css.itTip}/>{message}</code>
      
  };
 