import { Button } from "primereact/button";
import { FC } from "react";
import colors from "../config/colors";

type LinkButtonProps = {
  onClick: () => void;
};

const LinkButton: FC<LinkButtonProps> = ({ onClick }) => {
  return (
    <div className="card flex justify-content-center border border-none">
      <Button
        label="Forgot Password?"
        link
        onClick={onClick}
        style={{
          padding: "0%",
          border: "none",
          color: `${colors.grey}`,
          fontSize: "medium",
        }}
      />
    </div>
  );
};

export default LinkButton;
