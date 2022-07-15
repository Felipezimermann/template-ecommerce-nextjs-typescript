import { NextComponentType, NextPageContext } from "next";
import React, { ReactNode } from "react";

export interface interfaceLayoutLoja {
  children?: React.ReactNode;
  carrinho: number;
}
export interface LojaProps {
  pageProps: any;
  Component: NextComponentType<NextPageContext, any, {}> & {
    layoutProps: any;
  };
}
export interface LayoutProps {
  children: React.ReactNode;
}
export interface interfaceLoja {
  layoutProps: { layout: any };
}
