import { FC } from 'react';
import './tag.css';

interface IProps {
  label: string;
  FAIconClassName: string;
}

const Tag: FC<IProps> = ({ FAIconClassName, label }) => {
  return (
    <div className="tag">
      <i className={FAIconClassName}></i>
      <span className="tag__label">{label}</span>
    </div>
  );
};

export default Tag;
