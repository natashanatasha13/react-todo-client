import React from "react";
interface footerLowerProps {
  className?: string;
}

const FooterLower = (props: footerLowerProps) => {
  const { className } = props;
  return <div className={className}></div>;
};

export default FooterLower;
