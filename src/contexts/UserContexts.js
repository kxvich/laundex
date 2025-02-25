import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<UserContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
