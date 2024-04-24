import type { MetaFunction } from "@remix-run/node";
import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-dark-blue/theme.css";

import { PrimeReactProvider } from 'primereact/api';
import BasicDemo from "~/components/hero";
        
        

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <PrimeReactProvider>
        <BasicDemo />
    </PrimeReactProvider>
  );
}
