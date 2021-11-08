import './App.css';
import { useState } from 'react';
import Card from './Card.js';

function App() {

  let free ={
    title: "FREE",
    price: "$0",
    user: "Single User",
    userEnabler: true,
    storage: "5GB Storage",
    storageEnabler: true,
    publicprojects: "Unlimited Public Projects",
    publicprojectsEnabler: true,
    access: "Community Access",
    accessEnabler: true,
    privateprojects: "Unlimited Private Projects",
    privateprojectsEnabler: false,
    support: "Dedicated Phone Support",
    supportEnabler: false,
    subdomain: "Free Subdomain",
    subdomainEnabler: false,
    statusreports: "Monthly Status Reports",
    statusreportsEnabler: false,
  }

  let plus ={
    title: "PLUS",
    price: "$9",
    user: "5 Users",
    userEnabler: true,
    storage: "50GB Storage",
    storageEnabler: true,
    publicprojects: "Unlimited Public Projects",
    publicprojectsEnabler: true,
    access: "Community Access",
    accessEnabler: true,
    privateprojects: "Unlimited Private Projects",
    privateprojectsEnabler: true,
    support: "Dedicated Phone Support",
    supportEnabler: true,
    subdomain: "Free Subdomain",
    subdomainEnabler: true,
    statusreports: "Monthly Status Reports",
    statusreportsEnabler: false,
  }

  let pro ={
    title: "PRO",
    price: "$49",
    user: "Unlimited Users",
    userEnabler: true,
    storage: "150GB Storage",
    storageEnabler: true,
    publicprojects: "Unlimited Public Projects",
    publicprojectsEnabler: true,
    access: "Community Access",
    accessEnabler: true,
    privateprojects: "Unlimited Private Projects",
    privateprojectsEnabler: true,
    support: "Dedicated Phone Support",
    supportEnabler: true,
    subdomainPrefix: "Unlimited",
    subdomain: "Free Subdomain",
    subdomainEnabler: true,
    statusreports: "Monthly Status Reports",
    statusreportsEnabler: true,
  }

  return <>
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          <Card type={free}/>
          <Card type={plus}/>
          <Card type={pro}/> 
        </div>
      </div>
    </section>
  </>
}

export default App;
