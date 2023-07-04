import React from "react"

function Header(){
    return (
        <header style={{backgroundColor:'black'}}>
          <h1 style={{color:'white'}}>Welcome to My Website</h1>
            <nav>
                <ul style={{color:'white'}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                </ul>
            </nav>
        </header>
      ); 
}
export default Header;
