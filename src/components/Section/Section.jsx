import PropTypes from 'prop-types'; // типізація компонента
import css from './Section.module.css'; // стилізація

import  {AiTwotonePushpin}  from 'react-icons/ai';

// Компонент відповідає за відображення секції з заголовком та дочірніми елементами
export const Section = ({ title, children }) => {
  return (
    <section>
      
      <h2 className={css.title}><AiTwotonePushpin/>{title}</h2>
      
      {children}
      
    </section>
  );
};

// типізація
Section.propTypes = {
  title: PropTypes.string.isRequired,
};

// Діма Берестень
