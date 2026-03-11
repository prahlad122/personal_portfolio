import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold tracking-wide border transition-all duration-200';

  const variantClasses = {
    primary:
      'bg-accent text-black border-accent hover:bg-transparent hover:text-accent',
    secondary:
      'bg-bgsecondary text-textmain border-muted hover:border-accent hover:text-accent',
    outline:
      'bg-transparent text-textdim border-muted hover:border-accent hover:text-accent',
  };

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-7 py-3',
  };

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={allClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
};

export default Button;