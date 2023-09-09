import PropTypes from 'prop-types'; // типізація компонента
import css from './Roadmap.module.css'; // стилізація



export const Roadmap = ({ message }) => {
  return <ul className={css.roadmap}>
   
    <li className={css.milestone}>{message}
    </li>
    
    </ul>
    
};

// типізація
Roadmap.propTypes = {
  message: PropTypes.string.isRequired,
};

// Діма Берестень
