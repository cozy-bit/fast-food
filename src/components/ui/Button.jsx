export default function Button({
  children = 'ORDER NOW',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-orange-400 hover:bg-orange-500 text-white font-medium text-sm tracking-wider uppercase px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}