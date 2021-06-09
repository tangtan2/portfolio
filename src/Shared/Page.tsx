import Footer from "./Footer";
import Header from "./Header";
import Spacer from "./Spacer";

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
          backgroundColor: "#F2F4F4",
        }}
      >
        <div style={{ flex: 1 }} />
        <div
          style={{
            width: "1000px",
          }}
        >
          <Spacer type="row" size="xxlarge" />
          {props.children}
          <Spacer type="row" size="xxlarge" />
        </div>
        <div style={{ flex: 1 }} />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
