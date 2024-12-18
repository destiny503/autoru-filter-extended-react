import s from './InputArea.module.css'

interface InputAreaProps {
  value: string;
  onClick: () => void;
}

const InputArea: React.FC<InputAreaProps> = ({ value, onClick }) => {
  return (
      <input 
        className={s.input} 
        onClick={onClick} 
        type="text" 
        value={value} 
        readOnly 
      />
  )
}

export default InputArea