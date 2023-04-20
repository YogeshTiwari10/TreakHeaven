import React from "react";
import Layout from "../components/Layouts/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">

Our app is designed to provide you with an unparalleled online shopping experience, allowing you to easily browse and purchase products from the comfort of your own home. Our goal is to make shopping easy, fast, and hassle-free. <br></br> <br></br>

Our mission is to provide you with a convenient, efficient, and enjoyable shopping experience that you can trust. We are constantly improving and expanding our app to meet the evolving needs of our customers, and we welcome your feedback and suggestions as we continue to grow.
<br></br>
<br></br>

Thank you for choosing our Ecommerce app, and happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;