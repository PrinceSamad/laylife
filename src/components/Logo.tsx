import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const Logo = ({ variant = 'dark', size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizes = {
    sm: { icon: 32, text: 'text-lg', sub: 'text-[10px]' },
    md: { icon: 40, text: 'text-xl', sub: 'text-xs' },
    lg: { icon: 48, text: 'text-2xl', sub: 'text-sm' },
    xl: { icon: 64, text: 'text-3xl', sub: 'text-base' },
  };

  const colors = {
    light: {
      primary: 'hsl(var(--primary-foreground))',
      secondary: 'hsl(var(--secondary))',
      accent: 'hsl(var(--secondary))',
      text: 'text-primary-foreground',
      subtext: 'text-primary-foreground/70',
    },
    dark: {
      primary: 'hsl(var(--primary))',
      secondary: 'hsl(var(--secondary))',
      accent: 'hsl(var(--secondary))',
      text: 'text-primary',
      subtext: 'text-muted-foreground',
    },
  };

  const { icon, text, sub } = sizes[size];
  const { primary, secondary, accent, text: textColor, subtext } = colors[variant];

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Premium SVG Logo Mark */}
      <motion.svg
        width={icon}
        height={icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Outer Circle with Gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primary} />
            <stop offset="100%" stopColor={secondary} />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={secondary} />
            <stop offset="100%" stopColor={accent} />
          </linearGradient>
        </defs>
        
        {/* Main Circle */}
        <motion.circle
          cx="32"
          cy="32"
          r="30"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Inner decorative ring */}
        <motion.circle
          cx="32"
          cy="32"
          r="24"
          stroke={secondary}
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.3"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* L Letter - Stylized */}
        <motion.path
          d="M22 18 L22 40 L30 40"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />

        {/* Cross/Plus - Healthcare Symbol */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <rect x="36" y="22" width="12" height="4" rx="2" fill={secondary} />
          <rect x="40" y="18" width="4" height="12" rx="2" fill={secondary} />
        </motion.g>

        {/* Decorative Dots - DNA-like pattern */}
        <motion.circle
          cx="48"
          cy="42"
          r="3"
          fill={secondary}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="42"
          cy="48"
          r="2"
          fill={primary}
          opacity="0.6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.4 }}
        />

        {/* Nigeria Map Silhouette Hint - Abstract shape */}
        <motion.path
          d="M16 44 Q18 48 22 48 Q24 50 26 48"
          stroke={secondary}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        />
      </motion.svg>

      {/* Brand Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className={`font-semibold ${text} ${textColor} tracking-tight block leading-tight`}>
            Laylife
          </span>
          <span className={`${sub} ${subtext} tracking-wide block`}>
            Pharmaceutical
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Logo;
