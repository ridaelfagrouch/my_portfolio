import React from "react";
import { Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const socialMediaData = [
  {
    icon: (
      <FacebookOutlined
        style={{ color: "#3b5999", fontSize: "2.5rem" }}
        rev={undefined}
      />
    ),
    href: "#",
  },
  {
    icon: (
      <InstagramOutlined
        style={{ color: "#e4405f", fontSize: "2.5rem" }}
        rev={undefined}
      />
    ),
    href: "#",
  },
  {
    icon: (
      <TwitterOutlined
        style={{ color: "#55acee", fontSize: "2.5rem" }}
        rev={undefined}
      />
    ),
    href: "#",
  },
  {
    icon: (
      <LinkedinOutlined
        style={{ color: "#0077b5", fontSize: "2.5rem" }}
        rev={undefined}
      />
    ),
    href: "#",
  },
  {
    icon: (
      <GithubOutlined
        style={{ color: "#333", fontSize: "2.5rem" }}
        rev={undefined}
      />
    ),
    href: "#",
  },
];

const SocialMedia = () => {
  return (
      <div className="fixed flex flex-col justify-center z-50 ">
        {socialMediaData.map((item, index) => (
          <div key={index}>
            <Button type="link" href={item.href} icon={item.icon} />
          </div>
        ))}
      </div>
  );
};

export default SocialMedia;
