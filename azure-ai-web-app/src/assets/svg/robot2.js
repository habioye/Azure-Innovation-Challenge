function robot2() {
    return (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  {/* <!-- Background Gradient for the Head --> */}
  <defs>
    <linearGradient id="headGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4CAF50" />
      <stop offset="100%" stop-color="#388E3C" />
    </linearGradient>
  </defs>
  
  {/* <!-- Head Shape --> */}
  <rect x="20" y="30" width="80" height="60" rx="20" fill="url(#headGradient)" />
  
  {/* <!-- Antenna --> */}
  <line x1="60" y1="10" x2="60" y2="30" stroke="#4CAF50" stroke-width="4" />
  <circle cx="60" cy="5" r="5" fill="#FFEB3B" />
  
  {/* <!-- Side Antennas --> */}
  <line x1="35" y1="40" x2="15" y2="25" stroke="#4CAF50" stroke-width="3" />
  <circle cx="15" cy="25" r="3" fill="#FFEB3B" />
  <line x1="85" y1="40" x2="105" y2="25" stroke="#4CAF50" stroke-width="3" />
  <circle cx="105" cy="25" r="3" fill="#FFEB3B" />

  {/* <!-- Eyes with Reflection --> */}
  <circle cx="45" cy="55" r="8" fill="white" />
  <circle cx="75" cy="55" r="8" fill="white" />
  <circle cx="43" cy="53" r="2" fill="#4CAF50" />
  <circle cx="73" cy="53" r="2" fill="#4CAF50" />

  {/* <!-- Mouth with Rounded Corners --> */}
  <rect x="45" y="75" width="30" height="8" rx="4" fill="white" />
  <line x1="50" y1="79" x2="70" y2="79" stroke="#4CAF50" stroke-width="2" />
</svg>

    )
}