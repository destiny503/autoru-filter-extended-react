import s from './Popup.module.css'

interface PopupProps {
  message: string;
}

const Popup: React.FC<PopupProps> = ({ message }) => {
  return <div className={s.popup}>{message}</div>;
};

export default Popup