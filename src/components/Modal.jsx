import { useImperativeHandle, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal(
  { score, time, restTime, lose = false },
  ref
) {
  const ModalRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      ModalRef.current.showModal();
    }
  }));

  return createPortal(
    <dialog className="result-modal" ref={ModalRef}>
      {lose ? (
        <h2> You Lose </h2>
      ) : (
        <div>
          <h2>Your SCORE: {score} % </h2>
          <div>
            <p>
              The target time was <strong> {time} seconds</strong>{" "}
            </p>
            <p>
              You stopped the timer with
              <strong> {restTime} seconds left</strong>
            </p>
          </div>
        </div>
      )}

      <form method="dialog">
        <button> Close </button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
