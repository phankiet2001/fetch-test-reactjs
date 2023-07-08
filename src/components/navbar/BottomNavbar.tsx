import { FC } from "react";

import { BoardIcon, HomeIcon, NotificationIcon, UserIcon } from "@/assets";
import { Badge } from "@/HOC";

const BottomNavbar: FC = () => {
  return (
    <section className="fixed bottom-0 w-full px-6 pt-5 pb-10 border-t border-[#E2E2EA] bg-white ">
      <div className="flex w-full justify-between items-center">
        <a href="#">
          <Badge>
            <HomeIcon />
          </Badge>
        </a>
        <a href="#">
          <Badge showBadge>
            <NotificationIcon />
          </Badge>
        </a>
        <a href="#">
          <Badge>
            <BoardIcon />
          </Badge>
        </a>
        <a href="#">
          <Badge>
            <UserIcon />
          </Badge>
        </a>
      </div>
    </section>
  );
};

export default BottomNavbar;
