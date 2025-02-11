import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({link}) => {

    const pathname = usePathname();
  return (
    <>
    <div>
        <Link href={link.url} className={`rounded p-1 ${pathname === link.url && "bg-black text-white"}`}>
        {link.title}
        </Link>
    </div>
    </>
  )
}

export default NavLink