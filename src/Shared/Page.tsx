import Header from "./Header";

const Page = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: 1 }} />
        <div
          style={{
            width: "1200px",
          }}
        >
          {props.children}
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
};

export default Page;
