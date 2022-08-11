import Link from 'next/link'

const Header = () => {
  return (
    <header >
        <div className=' h-16 w-4/5 bg-slate-700 m-auto flex items-center text-zinc-50 justify-between'>

         <svg className= '  ml-4 mr-0'  width= "60" height="60" viewBox="0 0 361 361" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="blog-logo">
            <path className="b-purple" d="M305.83 180.41C305.83 108.72 249.62 50.6 180.28 50.6V310.21C249.62 310.21 305.83 252.09 305.83 180.4V180.41Z" fill="#9E1F63"/>
            <path className="b-black" d="M54.73 180.41C54.73 108.72 110.94 50.6 180.28 50.6V310.21C110.94 310.21 54.73 252.09 54.73 180.4V180.41Z" fill="black"/>
            <g className='wheel'>
              <path className="s-purple" d="M117.51 180.41C117.51 216.25 145.61 245.31 180.28 245.31V115.5C145.61 115.5 117.51 144.56 117.51 180.4V180.41Z" fill="#9E1F63"/>
              <path className="s-black" d="M243.06 180.41C243.06 216.25 214.96 245.31 180.29 245.31V115.5C214.96 115.5 243.06 144.56 243.06 180.4V180.41Z" fill="black"/>
            </g>
            </g>
          </svg>
          <ul className=' w-1/2 flex justify-between'> 
              <li><a> Home </a></li>
              <li><a> About me </a></li>
              <li><a> Projects </a></li>
              <li><a> Interests </a></li>
              <li><a> Blog </a></li>
          </ul>
      
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>

        </div>
        

    </header>
  )
}

export default Header
