import { onAuthenticateUser } from '@/actions/user'
import AppSidebar from '@/components/global/app-sidebar'
import { redirect } from 'next/navigation'
import React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { getRecentProjects } from '@/actions/project'


type Props = {

    children: React.ReactNode
}

const Layout = async ({children}: Props) => {
    const recentProjects = await getRecentProjects();
    //const recent Projects = await getRecentProjects();
    const checkUser = await onAuthenticateUser()

    if(!checkUser.user){
        redirect('/sign-in')
    }
  return <SidebarProvider>
        <AppSidebar 
            user={checkUser.user}
            recentProjects={recentProjects.data || []}>

        </AppSidebar>
  </SidebarProvider>
}
export default Layout