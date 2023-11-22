import React, { FunctionComponent, MouseEvent } from "react";

interface CommonButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "primary" | "secondary" | "submit" | undefined;
  className?: string; // Allow passing a custom class name
}

const CommonButton: FunctionComponent<CommonButtonProps> = ({
  text,
  onClick,
  type,
  className,
}: CommonButtonProps) => {
  const buttonClasses = `common-button ${type} ${className}`.trim();

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default CommonButton;
