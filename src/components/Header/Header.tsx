import iconEraser from '../../assets/eraser.svg'
import iconSearch from '../../assets/search.svg'

import s from './Header.module.css'

interface HeaderProps {
  onReset: () => void;
  onOpenPage: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReset, onOpenPage }) => {
  return (
    <div className={s.header}>
        <div className={s.title}>
            destiny / autoru_filter
            <span className={s.mark}>_extended</span>
        </div>
        <div className={s.buttons}>
           <button onClick={onReset}>
                <img className={s.icon} src={iconEraser} alt="Reset" />
            </button>
            <button onClick={onOpenPage}>
                <img className={s.icon} src={iconSearch} alt="Open link" />
            </button>
        </div>
    </div>
  )
}

export default Header