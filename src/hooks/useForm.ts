import { ChangeEvent, FormEvent, useState } from "react";

const useForm = <T>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("state: ", state);
  };
  return {
    state,
    onChange,
    onSubmit,
  };
};

export default useForm;
