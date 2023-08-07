import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";

import Portal, { createContainer } from "../portal/Portal";

import classes from "./Modal.module.css";

const MODAL_CONTAINER_ID = "modal-container-id";

type Props = {
  title: string;
  onClose?: () => void;
  children: React.ReactNode | React.ReactNode[];
};

const Modal = (props: Props) => {
  const { title, onClose, children } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  const handleClose: MouseEventHandler<
    HTMLDivElement | HTMLButtonElement
  > = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className={classes.wrap} ref={rootRef} data-testid="wrap">
        <div className={classes.content}>
          <button
            type="button"
            className={classes.closeButton}
            onClick={handleClose}
            data-testid="modal-close-button"
          >
            Х
          </button>
          <p className={classes.title}>{title}</p>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
