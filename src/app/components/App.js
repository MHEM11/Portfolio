import { useState } from 'react';
import { Dropdown } from './Dropdown';
import { usePathname } from 'next/navigation';

function ChooseDropdown() {
  const [isPortfolio, SetIsPortfolio] = useState(true);
  let curPath = usePathname();
  const links = [
    {label: "Push", href: "/Push" },
    {label: "Projects", href: "/Pull" },
    {label: "Contact", href: "/Legs" },
    {label: "Contact", href: "/Exercises" },
    {label: "Contact", href: "/Calender" },
    {label: "Contact", href: "/Profile" },
  ]

  print(curPath);
}
ChooseDropdown();
