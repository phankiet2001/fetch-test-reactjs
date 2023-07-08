import BalanceBackgroundIcon from "@/assets/icons/BalanceBackgroundIcon";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

type CoinBalanceContainerProps = HTMLAttributes<HTMLDivElement>;

const CoinBalanceContainer: FC<
  PropsWithChildren<CoinBalanceContainerProps>
> = ({ children }) => {
  return (
    <div className="text-black rounded-lg shadow-coin-balance py-8 px-6 relative z-0 overflow-hidden">
      <BalanceBackgroundIcon className="bg-white absolute top-0 left-0 w-full h-[400] -z-10" />
      <div className="z-30 bg-transparent">{children}</div>
    </div>
  );
};

export default CoinBalanceContainer;
