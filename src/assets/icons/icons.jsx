import { ReactComponent as DashboardIcon } from "./svgIcons/dashboard_icon.svg";
import { ReactComponent as ScheduleIcon } from "./svgIcons/schedule_icon.svg";
import { ReactComponent as SettingIcon } from "./svgIcons/setting_icon.svg";
import { ReactComponent as TransactionSvg } from "./svgIcons/transaction_icon.svg";
import { ReactComponent as UserIcon } from "./svgIcons/user_icon.svg";
import { ReactComponent as UsersIcon } from "./svgIcons/users_icon.svg";
import { ReactComponent as RevenueIcon } from "./svgIcons/revenues_icon.svg";
import { ReactComponent as LikesIcon } from "./svgIcons/likes_icon.svg";
import { ReactComponent as SearchIcon } from "./svgIcons/search_icon.svg";
import { ReactComponent as NotificationIcon } from "./svgIcons/notification_icon.svg";

function TransactionIcon({ isFilled, ...rest }) {
  return isFilled ? (
    <TransactionSvg stroke="#000000" {...rest} />
  ) : (
    <TransactionSvg fill="none" />
  );
}
export {
  DashboardIcon,
  ScheduleIcon,
  SettingIcon,
  TransactionIcon,
  UserIcon,
  UsersIcon,
  RevenueIcon,
  LikesIcon,
  SearchIcon,
  NotificationIcon,
};
