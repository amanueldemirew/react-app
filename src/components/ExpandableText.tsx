import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);

  if (children.length <= maxChars) return <p> {children} </p>;
  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <div>
      <p>
        {text}...{" "}
        <button onClick={handleClick}>{isExpanded ? "Less" : "More"}</button>
      </p>
    </div>
  );
};

export default ExpandableText;
