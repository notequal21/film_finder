import style from './ProgressBar.module.scss';

interface IProgressBar {
  percentage: number;
  className?: string;
}

const ProgressBar = ({ percentage, className }: IProgressBar) => {
  return (
    <div className={`${style.progress} ${className}`}>
      <div
        style={{ width: `${percentage}%` }}
        className={style.progress__line}
      ></div>
    </div>
  );
};

export default ProgressBar;
