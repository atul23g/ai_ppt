import Home from "@/icons/Home";
import Setting from "@/icons/Setting";
import Template from "@/icons/Template";
import Trash from "@/icons/Trash";
export const data = {
    user:{
        name:"shadcn",
        email:"m@example.com",
        avatar: '/avatars/shadcn.jpg',
    },

    navMain:[
        {
            title:"Home",
            url:'/home',
            icon:Home,

        },
        {
            title:"Templates",
            url:'/templates',
            icon:Template,

        },
        {
            title:"Trash",
            url:'/trash',
            icon:Trash,

        },
        {
            title:"Settings",
            url:'/settings',
            icon:Setting,

        },
    
    ]
}