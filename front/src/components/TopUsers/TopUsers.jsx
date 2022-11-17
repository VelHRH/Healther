import { TopUserItem } from "./TopUserItem";

export const TopUsers = () => {
 return (
  <>
   <div
    className={`w-[22%] hidden md:block fixed top-24 left-[70%] cursor-pointer font-semibold border-[3px] border-violet-800 rounded-xl`}
   >
    <TopUserItem
     fullname="Valentyn Yurchenko"
     streak={112}
     avatar="https://www.w3schools.com/howto/img_avatar2.png"
    />
    <TopUserItem
     fullname="Valentyn"
     streak={111}
     avatar="https://www.w3schools.com/howto/img_avatar2.png"
    />
    <TopUserItem
     fullname="Valentyn"
     streak={111}
     avatar="https://www.w3schools.com/howto/img_avatar2.png"
    />
    <TopUserItem
     fullname="Valentyn"
     streak={111}
     avatar="https://www.w3schools.com/howto/img_avatar2.png"
    />
    <TopUserItem
     fullname="Valentyn"
     streak={111}
     avatar="https://www.w3schools.com/howto/img_avatar2.png"
    />
   </div>
   <div className="md:w-1/5 "></div>
  </>
 );
};
