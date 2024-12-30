import "./footerSection.scss";

const FooterSection = () => {
  return (
    <section className="footerSection" id="homepage-footer">
      <hr />
      <h2>Royal Restaurant</h2>
      <p>
        © {new Date().getFullYear()} RoyalRestaurant, Inc. All rights reserved.
      </p>
    </section>
  );
};

export default FooterSection;
