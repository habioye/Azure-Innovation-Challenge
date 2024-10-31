function robot1() {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  {/* <!-- Head Shape --> */}
  <rect x="20" y="30" width="60" height="50" rx="15" fill="#4CAF50"/>
  
  {/* <!-- Antenna --> */}
  <line x1="50" y1="15" x2="50" y2="30" stroke="#4CAF50" stroke-width="4"/>
  <circle cx="50" cy="10" r="5" fill="#4CAF50"/>
  
  {/* <!-- Eyes --> */}
  <circle cx="35" cy="50" r="5" fill="white"/>
  <circle cx="65" cy="50" r="5" fill="white"/>
  
  {/* <!-- Mouth --> */}
  <rect x="40" y="65" width="20" height="5" rx="2.5" fill="white"/>
</svg>

    )
}