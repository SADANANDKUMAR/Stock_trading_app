import { useState } from "react";
import { TabItem } from "../../types";
import { Tabs } from "../Tabs";
import { TabContent } from "../TabContent";
import OrderHistory from "./OrderHistory";
import Holdings from "./Holdings";
import Watchlist from "./Watchlist";
import Transactions from "./Transactions";
import { ArrowLeftRight, Eye, History, Wallet } from "lucide-react";

type PortfolioTab =
  | 'orders'
  | 'holdings'
  | 'watchlist'
  | 'transactions';

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] =
    useState<PortfolioTab>('orders');

 const tabs: TabItem<PortfolioTab>[] = [
  {
    key: "orders",
    label: "Orders",
    icon: History,
  },
  {
    key: "holdings",
    label: "Holdings",
    icon: Wallet,
  },
  {
    key: "watchlist",
    label: "Watchlist",
    icon: Eye,
  },
  {
    key: "transactions",
    label: "Transactions",
    icon: ArrowLeftRight,
  },
] satisfies {
  key: PortfolioTab;
  label: string;
  icon: any;
}[];

  return (
    <>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <TabContent
        activeTab={activeTab}
        renderMap={{
          orders: <OrderHistory />,
          holdings: <Holdings />,
          watchlist: <Watchlist />,
          transactions: <Transactions />,
        }}
      />
    </>
  );
}
