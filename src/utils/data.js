import {
  LuLayoutDashboard,
  LuGalleryVerticalEnd,
  LuMessageSquareQuote,
  LuLayoutTemplate,
  LuTag
} from "react-icons/lu";

export const SIDE_MENU_DATA = [
    {
        id: "01",
    Label:"Dashboard",
    icon:LuLayoutDashboard,
    Path:"/admin/dashboard"
    },
    {
        id: "02",
    Label:"Blog Post",
    icon:LuGalleryVerticalEnd,
    Path:"/admin/post"
    },
    {
        id: "03",
    Label:"Comment",
    icon:LuMessageSquareQuote,
    Path:"/admin/comment"
    },
]


export const BLOG_NAVBAR_DATA = [
    {
        id: "01",
    Label:"Home",
    icon:LuLayoutTemplate,
    Path:"/"
    },
    {
        id: "02",
    Label:"React JS",
    icon:LuTag,
    Path:"/tag/React"
    },
    {
        id: "03",
    Label:"Next JS",
    icon:LuTag,
    Path:"/tag/Next.js"
    },
]

// {SIDE_MENU_DATA.map(item => (
//   <Link key={item.id} to={item.Path}>
//     <item.icon /> {/* renders the React component */}
//     <span>{item.Label}</span>
//   </Link>
// ))}