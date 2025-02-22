import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-darkBrown/90 backdrop-blur-md border-b border-saffron/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-saffron">IEEExCS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/schedule">Sacred Timeline</NavLink>
            <NavLink to="/register">Join Battle</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/team">Team</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-saffron"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-darkBrown/95 backdrop-blur-md border-b border-saffron/20">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <MobileNavLink to="/schedule" onClick={() => setIsOpen(false)}>Sacred Timeline</MobileNavLink>
            <MobileNavLink to="/register" onClick={() => setIsOpen(false)}>Join Battle</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink to="/team" onClick={() => setIsOpen(false)}>Team</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-saffron hover:text-gold transition-colors duration-300 font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    className="block text-saffron hover:text-gold transition-colors duration-300 font-medium py-2"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;