import {Search} from 'lucide-react'
const SearchProduct = ({categories,setSelectCategory,setSearchInput}) => {
  
  return (
    <div className='flex gap-4 flex-wrap'>
        <select onChange={(e)=>setSelectCategory(e.target.value)} className='border border-gray-200 w-30 bg-transparent h-10 font-bold p-2.5 rounded-md outline-0'>select Category
          <option value="select">Select</option>
       {
         categories.map((element)=>(
            <option key={element} value={element}>{element}</option>
         ))
       }
        </select>
        <div className='flex justify-between gap-2 w-max border border-gray-200 p-1.5 outline-0 rounded-md  focus:border-blue-300'>
        <input type="text" placeholder='Serach by Products' className="outline-0 w-30  rounded-md" onChange={(e)=>setSearchInput(e.target.value)}/> <span className='place-content-center text-gray-400'> <Search/></span>
        </div>
    </div>
  )
}

export default SearchProduct