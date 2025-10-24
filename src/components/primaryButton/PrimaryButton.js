import './PrimaryButton.css';
import { size } from '../../theme';

export const PrimaryButton = ({ text, onClick, color }) => {
  return (
    <button
      type="button"
      className="primaryButton"
      style={{ background: color }}
      onClick={onClick}
    >
      <span className="buttonText" style={{ fontSize: size.fonts.large }}>
        {text}
      </span>
    </button>
  );
};
