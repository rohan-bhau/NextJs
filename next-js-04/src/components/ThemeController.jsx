"use client";
import { useTheme } from "next-themes";
import {
  Moon,
  Sun,
} from "@gravity-ui/icons";
import { Switch } from "@heroui/react";

const ThemeController = () => {
       const { theme, setTheme } = useTheme();
    const icons = {
      darkMode: {
        off: Moon,
        on: Sun,
        selectedControlClass: "",
      },
    };

   return (
     //  <div>
     //    <button
     //      onClick={() => {
     //        console.log("Current theme:", theme);
     //        setTheme(theme === "dark" ? "light" : "dark");
     //      }}
     //    >
     //      Toggle Mode
     //    </button>
     //  </div>
     <div className="flex gap-3">
       {Object.entries(icons).map(([key, value]) => (
         <Switch
           key={key}
           defaultSelected
           size="lg"
           onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
         >
           {({ isSelected }) => (
             <>
               <Switch.Control
                 className={isSelected ? value.selectedControlClass : ""}
               >
                 <Switch.Thumb>
                   <Switch.Icon>
                     {isSelected ? (
                       <value.on className="size-3 text-inherit opacity-100" />
                     ) : (
                       <value.off className="size-3 text-inherit opacity-70" />
                     )}
                   </Switch.Icon>
                 </Switch.Thumb>
               </Switch.Control>
             </>
           )}
         </Switch>
       ))}
     </div>
   );

};

export default ThemeController;
