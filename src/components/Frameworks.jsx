// import { OrbitingCircles } from "./OrbitingCircles";

// export function Frameworks() {
//   const skills = [
//     "auth0",
//     "blazor",
//     "cplusplus",
//     "csharp",
//     "css3",
//     "dotnet",
//     "dotnetcore",
//     "git",
//     "html5",
//     "javascript",
//     "microsoft",
//     "react",
//     "sqlite",
//     "taiwindcss",
//     "vite.js",
//     "wordpress",
//   ];

//   return (
//     <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
//       <OrbitingCircles iconSize={25}>
//         {skills.map((skill, index) => (
//           <Icon key={index} src={`/assets/logos/${skill}.svg`} />
//         ))}
//       </OrbitingCircles>

//       <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
//         {skills
//           .slice() // create a copy so we don’t modify the original array
//           .reverse()
//           .map((skill, index) => (
//             <Icon key={index} src={`/assets/logos/${skill}.svg`} />
//           ))}
//       </OrbitingCircles>
//     </div>
//   );
// }

// const Icon = ({ src }) => (
//   <img
//     src={src}
//     alt="framework icon"
//     className="duration-200 rounded-sm hover:scale-110"
//   />
// );
import { OrbitingCircles } from "./OrbitingCircles"

export function Frameworks() {
    const skills=[
        "auth0",
        "blazor",
        "cplusplus",
        "csharp",
        "css3",
        "dotnet",
        "dotnetcore",
        "git",
        "html5",
        "javascript",
        "microsoft",
        "react",
        "sqlite",
        "wordpress",
    ];
        
    
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40}>
      {skills.map((skill,index)=>(
        <Icon key={index} src={`assets/logos/${skill}.svg`}/>
      ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
      {skills.reverse().map((skill,index)=>(
        <Icon key={index} src={`assets/logos/${skill}.svg`}/>
      ))}
      </OrbitingCircles>
    </div>
  )
}
const Icon=({src})=>(
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

