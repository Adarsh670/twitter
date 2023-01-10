import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {
  BellIcon,
  HomeIcon,
  BookmarkIcon,
  ClipboardIcon,
  EllipsisHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 mb-5 xl:p-1">
        <Image
          width="50"
          height="50"
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
        ></Image>
      </div>

      {/* menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalIcon} />
      </div>

      {/* button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* Mini-profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <Image
          width="30"
          height="0"
          className="rounded-full xl:mr-3"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="user-image"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold text-md">Garima Alagh</h4>
          <p className="text-gray-500 text-sm">@garima_alagh</p>
        </div>
        <EllipsisHorizontalIcon className="h-6 ml-7 hidden xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
