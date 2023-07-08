import { FC } from "react";

import { CoinBalanceContainer } from "@/HOC";
import { Button, ProcessBar } from "@/components";
import { ArrowRightIcon } from "@/assets";

const CoinBalance: FC = () => {
  return (
    <CoinBalanceContainer>
      <h4 className="text-small-heading font-medium text-sm mb-3">
        Available Coin balance
      </h4>
      <h3 className="text-5xl">340</h3>
      <div className="py-6">
        <ProcessBar />
      </div>
      <p className="text-body mb-6">
        You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
      </p>
      <a className="text-blue-dark flex items-center mb-6" href="#">
        <span>View tier benefits</span>
        <ArrowRightIcon />
      </a>
      <Button className="mb-6">My coupons</Button>
      <p className="text-center text-small-heading font-normal">Updated : 02/11/2021</p>
    </CoinBalanceContainer>
  );
};

export default CoinBalance;
