import { Button } from "primereact/button";
import React, { FC, useState } from "react";
import "primeicons/primeicons.css";

type CustomeButtonprops = {
  label: string;
  progress: boolean;
  icon: string;
  borderRadius: string;
  backgroundColor: string;
  border: string;
  onClick: () => void;
};

const CustomButton: FC<CustomeButtonprops> = ({
  label,
  progress,
  icon,
  border,
  backgroundColor,
  borderRadius,
  onClick,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnClick = () => {
    setLoading(true);

    onClick();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="card flex flex-wrap justify-content-center gap-3">
      <Button
        label={label}
        icon={icon}
        loading={loading || progress}
        onClick={handleOnClick}
        size="small"
        iconPos="right"
        style={{
          borderRadius: `${borderRadius}`,
          backgroundColor: `${backgroundColor}`,
          border: `${border}`,
        }}
      />
    </div>
  );
};

// const styles: { [key: string]: React.CSSProperties } = {

// }

export default CustomButton;
