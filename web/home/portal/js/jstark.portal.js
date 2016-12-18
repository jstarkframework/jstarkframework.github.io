function jskfn_portal_home()
{
    top.location="/index.html";
};

function fn_top_click(top_menu)
{
    if(top_menu=="about")
    {
        document.location = "/about_overview.html"; 
    }
    else if(top_menu=="setting")
    {
        document.location = "/setting_fullversion.html";    
    }
    else if(top_menu=="study")
    {
        document.location = "/study.html";  
    }   
    else if(top_menu=="download")
    {
        document.location = "/download.html";   
    }   
    else if(top_menu=="community")
    {
        document.location = "/community.html";  
    } 
};