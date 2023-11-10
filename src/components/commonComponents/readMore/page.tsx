import React, { useState } from "react";
import CommonButton from "@/components/buttonComponent/page";
import styles from './style.module.scss'
interface ReadMoreButtonProps {
  text: string;
  maxLength: number;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = typeof text === 'string' ? (isExpanded ? text : `${text.slice(0, maxLength)}...`) : '';

  return (
    <div>
      <p>{displayText}</p>
      <CommonButton
        text={isExpanded ? 'Read Less' : 'Learn More'}
        type="primary"
        onClick={toggleReadMore}
        className={styles["custom-btn"]}
      />
    </div>
  );
};

export default ReadMoreButton;

