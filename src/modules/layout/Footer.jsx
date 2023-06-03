import React from "react";

const Footer = () => {
  return (
    <footer className="bg-tertiary flex flex-col px-4 pt-12">
      <div className="footer_seciton__1 flex flex-col">
        <div className="section-divider mb-8">
          <div className="section-heading">
            <h3 className="text-secondary text-base">Company</h3>
          </div>
          <div>
            <p className="text-sm text-primary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              eum, ad accusantium iure molestias iste atque qui quia enim facere
              in cupiditate, maiores
            </p>
          </div>
        </div>
        <div className="section-divider mb-8">
          <div className="section-heading">
            <h3 className="text-secondary text-base">Links</h3>
          </div>
          <div>
            <p className="text-sm text-primary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              eum, ad accusantium iure molestias iste atque qui quia enim facere
              in cupiditate, maiores
            </p>
          </div>
        </div>
        <div className="section-divider mb-8">
          <div className="section-heading">
            <h3 className="text-secondary text-base">Social</h3>
          </div>
          <div>
            <p className="text-sm text-primary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              eum, ad accusantium iure molestias iste atque qui quia enim facere
              in cupiditate, maiores
            </p>
          </div>
        </div>
      </div>
      <div className="footer_seciton__2 pt-4 pb-4 flex justify-left font-extralight">
        <span className="text-primary text-xs">Elimuendelezi &copy;2023</span>
      </div>
    </footer>
  );
};

export default Footer;
