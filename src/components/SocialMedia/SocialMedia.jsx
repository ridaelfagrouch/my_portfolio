import React from "react";
import { Button } from "antd";
import {
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

const socialMediaData = [
  {
    icon: (
      <TwitterOutlined
        style={{ color: "#55acee", fontSize: "2.5rem" }}
        rev={undefined}
      />
    ),
    href: "https://twitter.com/Rida34089360",
  },
  {
    icon: (
      <LinkedinOutlined
        style={{ color: "#0077b5", fontSize: "2.5rem" }}
        rev={undefined}
      />
    ),
    href: "https://www.linkedin.com/in/rida-el-fagrouch-13b566142/",
  },
  {
    icon: (
      <GithubOutlined
        style={{ color: "#fff", fontSize: "2.5rem" }}
        rev={undefined}
      />
    ),
    href: "https://github.com/ridaelfagrouch",
  },
  {
    icon : (
      <GoogleOutlined 
        style={{ color: "#fff", fontSize: "2.5rem" }}
        rev={undefined}
      />
    ),
    href: "#",
  }
];

const SocialMedia = () => {
  return (
      <div className="fixed flex flex-col max-2xl:flex-row max-2xl:space-x-4 justify-center z-50 ">
        {socialMediaData.map((item, index) => (
          <div key={index} >
            <Button type="link" href={item.href} icon={item.icon} target="_blank" rel="noopener noreferrer" className="hover:scale-75"/>
          </div>
        ))}
      </div>
  );
};

export default SocialMedia;
