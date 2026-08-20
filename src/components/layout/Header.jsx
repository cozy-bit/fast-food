import Button from "../ui/Button";
import logo from "/logo.png";

const Header = () => {
  const navLinks = [
    { name: "HOME", href: "#", active: true },
    { name: "PAGES", href: "pages" },
    { name: "OUR OFFER", href: "our-offer" },
    { name: "PRICING", href: "pricing" },
    { name: "SHOP", href: "shop" },
  ];

  return (
    <header className="w-full  border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* лого */}
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Fast Food Logo" className="h-25 w-auto" />
        </a>

        {/* навигация */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors ${
                link.active
                  ? "text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* кнопка заказа */}
        <div>
          <Button>ORDER NOW</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
