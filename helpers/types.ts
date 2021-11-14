import React from "react";

export interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface StringProps {
  [name: string]: string | React.ReactNode;
}

export interface Data {
  [key: string]: any;
}
