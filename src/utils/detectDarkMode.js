const detectDarkMode = () => {
    if (window.matchMedia && 
        window.matchMedia("(prefers-color-scheme: dark)").matches ) 
    {
        return 'dark'
    }
    return 'Light'
}

export default detectDarkMode