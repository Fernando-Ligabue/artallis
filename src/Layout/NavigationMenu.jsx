import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { logoMob } from "@/lib/constants";

const navItems = [
  {
    label: "Descobre",
    href: "#descobre",
    subItems: [
      { label: "Apresentação", href: "/apresentacao" },
      { label: "História", href: "/historia" },
      { label: "Missão", href: "/missao" },
      { label: "Estrutura Organizacional", href: "/estruturaorganizacional" },
      { label: "Equipa Artallis", href: "/equipa-artallis" },
      { label: "Protocolos e Parcerias", href: "/protocolos-parcerias" },
      { label: "Artallis +", href: "/artallismais" },
    ]
  },
  {
    label: "Aprende",
    href: "/aprende", 
  },
  {
    label: "Vivencia",
    href: "#vivencia",
    subItems: [
      { label: "Artallis em Palco", href: "/artallisempalco" },
      { label: "Comunidade CAL", href: "/comunidadecal" },
    ]
  },
  {
    label: "Junta-te",
    href: "/juntate", 
  },
  {
    label: "Liga-te",
    href: "#ligate",
    subItems: [
      { label: "NOTÍCIAS", href: "/noticias" },
      { label: "EVENTOS", href: "/eventos" },
      { label: "AGENDA", href: "/agenda" }
    ]
  }
];

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const textColor = location.pathname === "/" ? "text-white" : "text-black";
  const bgSubMenu = location.pathname === "/" ? "bg-black" : "bg-white";

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 869);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null);
  };

  const handleMainItemClick = (item) => {
    if (item.subItems) {
      if (activeSubmenu === item.label) {
        setActiveSubmenu(null);
      } else {
        setActiveSubmenu(item.label);
      }
    } else {
      setActiveSubmenu(null);
      setIsOpen(false);
    }
  };

  const handleSubItemClick = (href) => {
    navigate(href);
    setIsOpen(false);
    setActiveSubmenu(null); 
  };

  return (
    <nav className="relative w-full">
      {isMobile ? (
        <>
          <button
            onClick={toggleMenu}
            className="absolute top-[-2rem] right-1 p-2 text-black dark:text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} className="text-white absolute top-[0.5rem] right-1 z-50"/> : <Menu size={28} className={textColor} />}
          </button>
          
          <div
            className={cn(
              "fixed inset-0 bg-black/90 backdrop-blur-sm z-40",
              "transition-all duration-300 ease-in-out",
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          >
            <div className="w-44 p-4">
              <NavLink to="/"><img src={logoMob} alt="Logo" className="w-full" /></NavLink>
            </div>
            <div className="flex flex-col items-start p-6 pt-16 text-white">
              <div className="w-full space-y-4 mb-8 flex flex-col justify-end items-end">
                {navItems?.map((item) => (
                  <div key={item.label} className="space-y-3 flex flex-col justify-end items-end">
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => handleMainItemClick(item)}
                          className="block text-mdd font-barlow font-medium hover:text-artLightBlue-50 transition-colors w-full text-right"
                        >
                          {item.label}
                        </button>
                        {activeSubmenu === item.label && (
                          <div className="pl-4 space-y-1">
                            {item.subItems?.map((subItem) => (
                              <NavLink
                                key={subItem.label}
                                to={subItem.href}
                                className="block text-sm text-white transition-colors w-full text-right border-b border-artYellow-50"
                                onClick={() => handleSubItemClick(subItem.href)}
                              >
                                {subItem.label}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={item.href} 
                        onClick={() => handleMainItemClick(item)} 
                        className="block text-lg font-medium hover:text-artLightBlue-50 transition-colors w-full text-right"
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container mx-auto px-4">
          <div className="flex flex-col w-full">
            <div className="flex justify-start space-x-4 py-4">
              {navItems?.map((item) => (
                <div key={item.label} className="relative">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => handleMainItemClick(item)}
                        className={`${textColor} font-barlow font-semibold text-sm transition-colors duration-200`}
                      >
                        {item.label}
                      </button>
                      {activeSubmenu === item.label && (
                        <div className={`absolute top-full left-0 mt-2 shadow-sm w-max !z-50 ${bgSubMenu}`}>
                          {item.subItems?.map((subItem) => (
                            <NavLink
                              key={subItem.label}
                              to={subItem.href}
                              onClick={() => handleSubItemClick(subItem.href)}
                              className={`block w-full text-left px-4 py-1 text-xs font-barlow font-medium ${textColor} hover:bg-artLightBlue-50/10 border-b border-artYellow-50 transition-colors duration-200`}
                            >
                              {subItem.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.href} 
                      onClick={() => handleMainItemClick(item)} 
                      className={`${textColor} font-barlow font-semibold text-sm transition-colors duration-200`}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
