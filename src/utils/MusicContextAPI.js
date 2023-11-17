import { createContext, useState } from "react";

export const MusicContextAPI = createContext();

export const MusicContextAPIProvider = ({ children }) => {
    const [selectMood, setSelectMood] = useState('latest trends');
    const [music, setMusic] = useState(null);
    return (
        <MusicContextAPI.Provider value={{ selectMood, setSelectMood, music, setMusic }}>{children}</MusicContextAPI.Provider>
    );
}