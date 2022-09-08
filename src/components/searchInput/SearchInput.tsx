import { ChangeEvent, FC } from "react";
import "./searchInput.style.css";

interface IProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<IProps> = ({ name, onChange, value }) => {
  return (
    <div className="search_input_wrapper">
      <i className="fab fa-sistrix"></i>
      <input
        name={name}
        onChange={onChange}
        value={value}
        placeholder="Search..."
        type="text"
      />
    </div>
  );
};

export default SearchInput;
