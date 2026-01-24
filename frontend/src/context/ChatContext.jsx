import { createContext, useContext, useState } from 'react';

const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = async (text) => {
        // TODO: Implement send message
        setMessages([...messages, { role: 'user', content: text }]);
    };

    return (
        <ChatContext.Provider value={{ isOpen, toggleChat, messages, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
