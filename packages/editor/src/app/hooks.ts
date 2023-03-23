import { useContext } from 'react';
import { CodeTreeContext } from './codeTree';
import { toJS } from 'mobx';

export const useAppSelector = () => {
  const { state } = useContext(CodeTreeContext);
  console.log('state', toJS(state));
  return state;
};

export const useAppDispatch = () => {
  const { state, ...rest } = useContext(CodeTreeContext);
  return rest;
};
