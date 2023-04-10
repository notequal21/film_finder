import style from './Checkbox.module.scss';

// img imports
import check from '../../assets/img/check.svg';

interface ICheckbox {
  children: string;
  className?: string;
  onClick?: (e?: any) => void;
}

const Checkbox = ({ className, onClick, ...children }: ICheckbox) => {
  return (
    <label onClick={onClick} className={`${style.checkbox} ${className}`}>
      <input type='checkbox' />
      <span className={style.checkbox__fake}>
        <img src={check} alt='' />
      </span>
      <span className={style.checkbox__text}>{children.children}</span>
    </label>
  );
};

export default Checkbox;
