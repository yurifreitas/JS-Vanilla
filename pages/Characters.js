import { renderSidebar } from "../components/Sidebar.js";

export const renderCharacters = async () => {
    
    return `${await renderSidebar()}`;
}
