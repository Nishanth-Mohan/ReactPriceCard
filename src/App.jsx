import React from 'react'
import Card from './Components/Card'
import './App.css';

const App = () => {
  var data = [
    {
      title: "FREE",
      price: "$0/month",
      users: "Single User",
      storage: "50GB Storage",
      public: "Unlimited Public Projects",
      access: "Community Access",
      private: "Unlimited Private Projects",
      disabledPrivate: "text-muted",
      support: "Dedicated Phone Support",
      disabledSupport: "text-muted",
      subdomain: "Free Subdomain",
      disabledSubdomain: "text-muted",
      report: "Monthly Status Reports",
      disabledReport: "text-muted",
      check: "fa fa-check",
      cross: "fa fa-times",
      id: "1"
    },
    {
        title: "PLUS",
        price: "$9/month",
        users: "5 User",
        storage: "50GB Storage",
        public: "Unlimited Public Projects",
        access: "Community Access",
        private: "Unlimited Private Projects",
        support: "Dedicated Phone Support",
        subdomain: "Free Subdomain",
        report: "Monthly Status Reports",
        disabledReport: "text-muted",
        check: "fa fa-check",
        cross: "fa fa-times",
        id: "2"
    },
    {
      title: "PRO",
      price: "$49/month",
      users: "Unlimited Users",
      storage: "50GB Storage",
      public: "Unlimited Public Projects",
      access: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      report: "Monthly Status Reports",
      check: "fa fa-check",
      cross: "fa fa-times",
      id: "3"
    }
  ]
  return (
    <>
    <Card data={data}></Card>
    </>
  )
}

export default App