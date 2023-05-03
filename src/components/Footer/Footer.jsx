import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-slate-300 px-8 md:px-20 py-10 mt-24">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-5 ">
        <div>
          <p className="mb-2 font-medium text-xl">Dish Detective Pro</p>
          <p className="mb-2">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
        </div>
        <div>
          <p className="mb-2 font-medium text-xl">Company</p>
          <p className="mb-2">About Us</p>
          <p className="mb-2">Work</p>
          <p className="mb-2">Latest News</p>
          <p className="mb-2">Careers</p>
        </div>
        <div>
          <p className="mb-2 font-medium text-xl">Product</p>
          <p className="mb-2">Prototype</p>
          <p className="mb-2">Plans & Pricing</p>
          <p className="mb-2">Customers</p>
          <p className="mb-2">Integrations</p>
        </div>
        <div>
          <p className="mb-2 font-medium text-xl">Support</p>
          <p className="mb-2">Help Desk</p>
          <p className="mb-2">Sales</p>
          <p className="mb-2">Become a Partner</p>
          <p className="mb-2">Developers</p>
        </div>
        <div>
          <p className="mb-2 font-medium text-xl">Developers</p>
          <p className="mb-2">524 Broadway , NYC</p>
          <p className="mb-2">+1 777 - 978 - 5570</p>
          <div className="flex gap-3">
            <img src="../../../public/images/twitter.png" alt="" />
            <img src="../../../public/images/youtube.png" alt="" />
            <img src="../../../public/images/fb.png" alt="" />
          </div>
        </div>
      </div>
      <hr className="my-7" />
      <div className="flex justify-between text-xs">
        <p>@2023 CareerHub. All Rights Reserved</p>
        <p>Powered by CareerHub</p>
      </div>
    </div>
  );
};

export default Footer;
