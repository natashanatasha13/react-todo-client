interface ButtonProps {
  placeholder?: string;
  className?: string;
  link?: string | any;
  text?: string;
  linkFuncLogin?: () => void;
  linkFuncEnter?: () => void;
  func?: () => void;
}

interface InputProps {
  className?: string;
  link?: string | any;
  text?: string;
  linkFuncLogin?: () => void;
  linkFuncEnter?: () => void;
  func?: (event: any) => void;
  placeholder?: string;
}
export type Props = ButtonProps | InputProps;
