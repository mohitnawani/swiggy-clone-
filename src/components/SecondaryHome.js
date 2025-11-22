import  {Outlet}  from "react-router"
import Topheader from './Topheader';
export default function SecondaryHome()
{
    return (
        <>
            <Topheader />
            <Outlet />
        </>
    )
}