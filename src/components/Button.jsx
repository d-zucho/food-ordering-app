const Button = ({ bg, color, rounded, children, className }) => {
  return (
    <>
      <button
        className={`px-4 py-2 text-${color} bg-${bg} rounded-${rounded} ${className}`}
      >
        {children}
      </button>
    </>
  )
}

export default Button
