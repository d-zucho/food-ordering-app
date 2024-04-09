const Button = ({ label, bg, color, rounded }) => {
  return (
    <>
      <button className={`px-4 py-2 text-${color} bg-${bg} rounded-${rounded}`}>
        {label}
      </button>
    </>
  )
}

export default Button
