
import { useSelector } from 'react-redux'
import Logo from '../assets/reduxtore.svg'
import {ShoppingCart} from 'lucide-react'
import {Link} from 'react-router-dom'

const Header = () => {
  const cartitems=useSelector((state)=>state.cart.items)
  return (
    <header className='flex items-center justify-between p-4 m-2 bg-slate-50 shadow-md h-16'>
        <div><img src={Logo} className='w-28'/></div>
        <div className='flex items-center gap-10 p-2'>
           <Link to="/cart" className='flex gap-1'><ShoppingCart size={28}/><span className='w-6 h-6 text-lg rounded-xl font-extrabold  text-slate-50 bg-blue-400 text-center '>{cartitems.length}</span></Link> 
        </div>
    </header>
  )
}

export default Header