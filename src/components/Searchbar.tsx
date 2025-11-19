import {Search} from 'lucide-react'

function Searchbar() {
  return (
    <div className='hidden sm:flex items-center gap-2 py-1 px-1 shadow-md 
    rounded-2xl ring-1 ring-amber-100 '>
        <Search  className='h-4 w-4'/>
        <input className='outline-0 text-sm' id='search' placeholder='search...'/>
    </div>
  )
}

export default Searchbar