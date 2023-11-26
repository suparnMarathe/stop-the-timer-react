import { forwardRef } from "react";

const ResultModal = forwardRef(
  ({ targetTime, remainingTime, onReset }, ref) => {
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1-remainingTime/(targetTime*1000))*100);
    return (
      <dialog ref={ref} className="result-modal">
        {userLost ? <h2>You lost!</h2> : <h2>You won!</h2>}
        {!userLost && <p>your score is {score}</p>}
        <p>
          the target time was<strong> {targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with{" "}
          <strong> {formattedRemainingTime} left.</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);
export default ResultModal;
