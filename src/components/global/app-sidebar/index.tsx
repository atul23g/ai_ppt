"use client"
import { Project, User } from "@prisma/client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavMain from "./nav-main";
import { data } from "@/lib/constants";
// Make sure this is the correct path

type Props = {
  recentProjects: Project[];
  user: User;
};

const AppSidebar = ({
  recentProjects,
  user,
  ...props
}: {
  recentProjects: Project[];
} & {
  user: User;
} & React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar
      collapsible="icon"
      className="max-w-[212px] bg-background-90"
      {...props}
    >
      <SidebarHeader className="pt-6 px-3 pb-0">
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <Avatar className="h-10 w-10 rounded-full">
              <AvatarImage src="/vivid.png" alt="vivid-logo" />
              <AvatarFallback className="rounded-lg">VI</AvatarFallback>
            </Avatar>
          </div>
          <span className="turncate text-primary text-3xl font-semibold">
            {" "}
            vivid
          </span>
        </SidebarMenuButton>
      </SidebarHeader>

      <SidebarContent className="px-3 mt-10 gap-y-6">
      <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
