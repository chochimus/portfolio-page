const Logo = () => {
  return (
    <svg
      className=" fill-slate-700 w-12 h-12 transition duration-300"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" />
      <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="0.7" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="10"
        fontWeight="bold"
      >
        AJH
      </text>
      <line x1="0" x2="10.5" y1="16" y2="16" stroke="white" strokeWidth="1.3" />
    </svg>
  );
};

export default Logo;
