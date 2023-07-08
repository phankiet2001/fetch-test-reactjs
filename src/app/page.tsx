import { FC } from "react";

import { foodList, petroList, rentalRebateList } from "@/services";

import {
  Article,
  BottomNavbar,
  CoinBalance,
  HorizontalList,
  IconButton,
  Typography,
} from "@/components";

import { ArrowLeftIcon } from "@/assets";
import { Article as ArticleType } from "@/types";

const Home: FC = () => {
  return (
    <div className="pb-20">
      <header className="bg-deep-blue text-white pt-14 h-[400px] relative">
        <div className="pl-8 mb-6">
          <IconButton title="arrow-button">
            <ArrowLeftIcon />
          </IconButton>
        </div>
        <div className="pl-8 mb-10">
          <h3 className="text-3xl font-semibold">Silver Tier</h3>
          <Typography className="pr-8 text-xs">
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </Typography>
        </div>
        <div className="px-4 absolute bottom-30 left-0 w-full">
          <CoinBalance />
        </div>
      </header>
      <section className="pt-56 px-4">
        <HorizontalList
          title="Petro"
          className="mb-6"
          renderChild={(i) => {
            const item = i as ArticleType;
            return (
              <Article
                title={item.title}
                assetComponent={item.asset}
                className="mr-6"
                content={item.content}
                contentComponent={item.contentComponent}
                titleComponent={item.titleComponent}
                key={item.id}
              />
            );
          }}
          listItems={petroList}
        />
        <HorizontalList
          title="Rental Rebate"
          className="mb-6"
          renderChild={(i) => {
            const item = i as ArticleType;
            return (
              <Article
                title={item.title}
                assetComponent={item.asset}
                className="mr-6"
                content={item.content}
                contentComponent={item.contentComponent}
                titleComponent={item.titleComponent}
                key={item.id}
              />
            );
          }}
          listItems={rentalRebateList}
        />
        <HorizontalList
          title="Food and Beverage"
          className="mb-12"
          renderChild={(i) => {
            const item = i as ArticleType;
            return (
              <Article
                title={item.title}
                assetComponent={item.asset}
                className="mr-6"
                content={item.content}
                contentComponent={item.contentComponent}
                titleComponent={item.titleComponent}
                key={item.id}
              />
            );
          }}
          listItems={foodList}
        />
      </section>
      <BottomNavbar />
    </div>
  );
};

export default Home;
