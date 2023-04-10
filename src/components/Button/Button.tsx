import style from './Button.module.scss';

interface IButton {
  transparent?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: any;
}

const Button = ({
  transparent,
  className,
  onClick,
  disabled,
  ...children
}: IButton) => {
  if (disabled) {
    return (
      <button
        disabled
        onClick={onClick}
        className={`
        ${style.button} 
        ${transparent ? style.transparent : ''} 
        ${style.disabled} 
        ${className}`}
      >
        {children.children}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`
        ${style.button} 
        ${transparent ? style.transparent : ''}  
        ${className}`}
      >
        {children.children}
      </button>
    );
  }
};

export default Button;
