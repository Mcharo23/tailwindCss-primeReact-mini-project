import "primeicons/primeicons.css";
import { FC, useState } from "react";
import { Tab, TabList, Tabs } from "react-tabs";
import Shopcart from "../components/shop-cart";
import Details from "../components/details";
import Categories from "../components/ctegories";
import WhatsNew from "../components/what-is-new";
import Delivery from "../components/derivery";
import { InputText } from "primereact/inputtext";
import Account from "../components/account";
import Cart from "../components/cart";
import CustomButton from "../components/custom-button";
import colors from "../config/colors";

const HomeScreen: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Shopcat");
  const [loading, setLoading] = useState<boolean>(false);

  const handlebyNowOnClick = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("tyme out");
    }, 1000);
    setLoading(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Shopcat":
        return <Shopcart />;
      case "Categories":
        return <Categories />;
      case "Details":
        return <Details />;
      case "What's New":
        return <WhatsNew />;
      case "Delivery":
        return <Delivery />;
      case "Account":
        return <Account />;
      case "Cart":
        return <Cart />;
      default:
        return null;
    }
  };

  return (
    <div className=" bg-green-950 w-screen h-auto card flex flex-col ">
      <div className="text-white w-full flex-row items-x-4 p-3 items-center justify-center text-center ">
        +07########
      </div>
      <Tabs className="w-full h-5/6 flex-col flex bg-slate-100  pr-10 pl-10">
        <div className="flex flex-wrap overflow-x-auto  pl-2 pr-2">
          <TabList className="flex  items-center justify-center space-x-4 w-full">
            <Tab
              className="cursor-pointer hover:bg-hover px-2 py-1 rounded"
              onClick={() => setActiveTab("Shopcat")}
            >
              Shopcat
            </Tab>
            <Tab
              className="cursor-pointer hover:bg-hover px-2 py-1 rounded"
              onClick={() => setActiveTab("Categories")}
            >
              Categories
            </Tab>
            <Tab
              className="cursor-pointer hover:bg-hover px-2 py-1 rounded"
              onClick={() => setActiveTab("Details")}
            >
              Details
            </Tab>
            <Tab
              className="cursor-pointer hover:bg-hover px-2 py-1 rounded"
              onClick={() => setActiveTab("What's New")}
            >
              What's New
            </Tab>
            <Tab
              className="cursor-pointer hover:bg-hover px-2 py-1 rounded"
              onClick={() => setActiveTab("Delivery")}
            >
              Delivery
            </Tab>
            <Tab
              className="cursor-pointer hover:bg-hover px-2 py-1"
              //   onClick={() => setActiveTab("Delivery")}
            >
              <span className="p-input-icon-right">
                <i className="pi pi-search" />
                <InputText
                  placeholder="Search product"
                  className="h-8"
                  style={{ border: "none", borderRadius: "10px" }}
                />
              </span>
            </Tab>
            <Tab
              className="cursor-pointer hover:bg-hover px-2 py-1 rounded"
              onClick={() => setActiveTab("Account")}
            >
              Account
            </Tab>
            <Tab
              className="cursor-pointer hover:bg-hover px-2 py-1 rounded"
              onClick={() => setActiveTab("Cart")}
            >
              cart
            </Tab>
          </TabList>
        </div>

        <div className="w-full h-5/6 flex flex-col flex-1 ">
          <div className="w-full h-1/3 flex flex-row">
            <div className=" bg-red-900 justify-center flex-col italic text-white text-lg items-center flex w-1/2 gap-3">
              Grab Upto 50% Off On Selected Headphones
              <CustomButton
                label={"By Now"}
                progress={loading}
                onClick={handlebyNowOnClick}
                icon={""}
                borderRadius={"30px"}
                backgroundColor={colors.green950}
                border={"none"}
              />
            </div>
            <img
              src="https://img.freepik.com/free-photo/portrait-young-girl-listening-music_23-2149238399.jpg"
              alt="image"
              className=" w-1/2  bg-cover flex"
            />
          </div>
          {renderTabContent()}
        </div>
      </Tabs>
    </div>
  );
};

export default HomeScreen;
