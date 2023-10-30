// "use client";
// import clsx from "clsx";
// import { useState } from "react";

// const TabCustom = ({ data }: { data: any }) => {
//   const [tabValue, setTabValue] = useState("beneficiaries");

//   return (
//     <div>
//       <div className="w-full inline-flex gap-6 items-center text-blue-2 rounded-md border-b border-zinc-200">
//         <span
//           id="beneficiaries"
//           className={clsx(
//             tabValue === "beneficiaries" &&
//               "border-b border-primary text-primary",
//             "py-4 uppercase cursor-pointer"
//           )}
//           onClick={(e: any) => setTabValue(e.target.id)}
//         >
//           Bénéficiaire actifs
//         </span>
//         <span
//           id="inactif"
//           className={clsx(
//             tabValue === "inactif" && "border-b border-primary text-primary",
//             "py-4 uppercase cursor-pointer"
//           )}
//           onClick={(e: any) => setTabValue(e.target.id)}
//         >
//           Bénéficiaire inactifs
//         </span>
//       </div>
//       <div className="py-6">
//         <div
//           className={clsx(
//             tabValue === "beneficiaries" ? "block" : "hidden",
//             "grid md:grid-cols-2 xl:grid-cols-3 gap-6 py-6"
//           )}
//         ></div>
//         <div className={clsx(tabValue === "inactif" ? "block" : "hidden")}>
//           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
//           nisi ut aliquip ex ea commodo consequat.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabCustom;
