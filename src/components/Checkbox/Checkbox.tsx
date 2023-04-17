import style from './Checkbox.module.scss';

// img imports
import check from '../../assets/img/check.svg';

interface ICheckbox {
  children: string;
  name: string;
  className?: string;
  onClick?: (e?: any) => void;
}

const Checkbox = ({ className, name, onClick, ...children }: ICheckbox) => {
  return (
    <label onClick={onClick} className={`${style.checkbox} ${className}`}>
      <input type='checkbox' name={name} />
      <span className={style.checkbox__fake}>
        <img src={check} alt='' />
      </span>
      <span
        className={style.checkbox__text}
        dangerouslySetInnerHTML={{ __html: children.children }}
      ></span>
    </label>
  );
};

export default Checkbox;
