import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { setTime } from "../../app/reducers/timerSlice";

const Timer = () => {
  const seconds = useSelector((state: RootState) => state.timer.seconds);
  const dispatch = useDispatch();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const resetTimer = () => {
    dispatch(setTime(0));
    localStorage.setItem('timer', '0');
  };

  const copyButtonText = () => {
    const innerText = buttonRef?.current?.innerText;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(innerText || '')
        .then(() => {
          console.log('Copy success')
        })
        .catch(() => {
          console.error('Copy fail')
        })
    } else 
      console.error('Clipboard writeText method is not supported')
  }

  return (
    <>
      <h3>Timer Page</h3>
      <p>Seconds elapsed: {seconds}</p>
      <button type='button' onClick={resetTimer}>Reset</button>
      <button ref={buttonRef} type='button' onClick={copyButtonText}>Copy me</button>
    </>
  )
};

export default Timer;