'use client';

import Styles from './button.module.css';

const Button = ({ title, kind, onClick }) => {
  const generationClassByKind = () => {
    if (kind === "secondary") return Styles.secondary;
    if (kind === "full") return Styles.full;
    return Styles.primary;
  };

  return (
    <div className="flex justify-center mt-5">
      <button className={`${Styles.button} ${generationClassByKind()}`} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
