import React from 'react'
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {MoonStar, Sun} from "lucide-react";

const ModeToggle = ({className}:{className: string}) => {
    const { setTheme, theme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <> { theme === 'light' ? (
            <Button className={`flex flex-row ${className} justify-center`} variant="outline" size="icon" onClick={toggleTheme}>
                <MoonStar/>
            </Button>) : (
            <Button className={`flex flex-row ${className} justify-center`} variant="outline" size="icon" onClick={toggleTheme}>
                <Sun />
            </Button>)}
        </>

    )
}
export default ModeToggle
