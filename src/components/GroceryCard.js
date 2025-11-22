export default function GroceryCard({GroceryData})
{
    return (
        <>
        <a href={GroceryData?.action?.link}>

            <img className=" w-36 h-44 shrink-0  object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+GroceryData?.imageId}></img>
        </a>

        </>
    )
}


