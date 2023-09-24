// import React from "react";
// import { useSelector } from "react-redux";
// const Settings = () => {
//   const { user } = useSelector((state) => state.profile);
//   return (
//     <div>
//       <div className="flex flex-col gap-y-2 text-richblack-5 lg:w-[792px]">
//         <h1>Edit Profile</h1>
//         {/* Section - 1 */}
//         <section className="flex gap-x-4">
//           <div>
//             <img
//               src={`${user?.image}`}
//               alt={`profile-${user?.firstName}`}
//               className="aspect-square w-[78px] rounded-full object-cover"
//             />
//           </div>
//           <div className="flex flex-col gap-y-2">
//             <p>Change Profile Picture </p>
//             <div className="flex gap-x-2">
//               <button className="text-richblack-5">Select</button>
//               <button className="text-richblack-5">Upload</button>
//             </div>
//           </div>

//           <div></div>
//         </section>
//         {/* Section - 2 */}
//         <section></section>
//         {/* Section - 3 */}
//         <section></section>
//         {/* Section - 4 */}
//         <section></section>
//       </div>
//     </div>
//   );
// };

// export default Settings;
//

import ChangeProfilePicture from "../components/core/Dashboard/Settings/ChangeProfilePicture";
import DeleteAccount from "../components/core/Dashboard/Settings/DeleteAccount";
import EditProfile from "../components/core/Dashboard/Settings/EditProfile";
import UpdatePassword from "../components/core/Dashboard/Settings/UpdatePassword";
import React from "react";

const Settings = () => {
  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Profile
      </h1>
      {/* Change Profile Picture */}
      <ChangeProfilePicture />
      {/* Profile */}
      <EditProfile />
      {/* Update Password */}
      <UpdatePassword />
      {/* Delete Account */}
      <DeleteAccount />
    </>
  );
};

export default Settings;
