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

export interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export interface PrimaryButtonProps {
  text: string;
  loading?: boolean;
  disabled?: boolean;
}

export interface CloseModalButtonProps {
  onClick: () => void | string;
}

export interface InputProps {
  placeholder: string;
  label: string;
  name: string;
}
