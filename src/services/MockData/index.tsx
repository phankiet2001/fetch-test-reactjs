import { CoinIcon, FoodIcon, PetroIcon, RentalIcon } from "@/assets";
import { Typography } from "@/components";
import { truncateString } from "@/helpers";
import { Article } from "@/types";

export const petroList: Article[] = [
  {
    id: 1,
    asset: <PetroIcon />,
    title: "15 coins",
    content: truncateString(
      "50% discount for every $100 top-up on your Shell Petrol Card"
    ),
  },
  {
    id: 2,
    asset: <PetroIcon fill="#2CC2B0" />,
    titleComponent: (
      <Typography className="text-title flex items-center">
        <CoinIcon className="mr-2" /> 1,000 Coins
      </Typography>
    ),
    contentComponent: (
      <Typography tag="article">
        <Typography>
          {truncateString("70% discount top-up on your Shell Petrol Card", 40)}
        </Typography>
        <a className="mb-3 text-blue-dark" href="#">
          Insufficient coins
        </a>
      </Typography>
    ),
  },
];

export const rentalRebateList: Article[] = [
  {
    id: 1,
    asset: <RentalIcon />,
    title: "20 coins",
    content: truncateString("Get $20 Rental rebate"),
  },
  {
    id: 2,
    asset: <RentalIcon fill="#A461D8" />,
    title: "15 coins",
    content: truncateString("Get $500 Rental rebate"),
  },
];

export const foodList: Article[] = [
  {
    id: 1,
    asset: <FoodIcon />,
    title: "25 coins",
    content: truncateString("NTUC Fairprice $50 Voucher"),
  },
  {
    id: 2,
    asset: <FoodIcon fill="#82C43C" />,
    title: "5 coins",
    content: truncateString("Free Cold Stone Sundae at any flavour!"),
  },
];