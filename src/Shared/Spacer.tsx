type Props = {
  type: "column" | "row";
  size: "small" | "medium" | "large" | "xlarge" | "xxlarge";
};

const sizeMap = {
  small: "5px",
  medium: "10px",
  large: "15px",
  xlarge: "20px",
  xxlarge: "40px",
};

const Spacer = (props: Props) => {
  if (props.type === "column") {
    return (
      <div
        style={{
          width: sizeMap[props.size],
        }}
      />
    );
  } else {
    return (
      <div
        style={{
          height: sizeMap[props.size],
        }}
      />
    );
  }
};

export default Spacer;
