import React from "react";
import { Button } from "antd";
import {
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
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
        style={{ color: "#333", fontSize: "2.5rem" }}
        rev={undefined}
      />
    ),
    href: "https://github.com/ridaelfagrouch",
  },
];

const SocialMedia = () => {
  return (
      <div className="fixed flex flex-col justify-center z-50 ">
        {socialMediaData.map((item, index) => (
          <div key={index}>
            <Button type="link" href={item.href} icon={item.icon} target="_blank" rel="noopener noreferrer"/>
          </div>
        ))}
      </div>
  );
};

export default SocialMedia;
