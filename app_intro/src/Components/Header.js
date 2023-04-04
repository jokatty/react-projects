import reactLogo from '../images/react-logo.png';

export default function Header(){
  return(
    <nav>
      <img src={reactLogo} alt="react logo"/>
      <ul>
        <li>pricing</li>
        <li>contact us</li>
      </ul>
    </nav>
  )
}