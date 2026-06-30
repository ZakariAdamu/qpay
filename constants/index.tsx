import { CircleDollarSignIcon, Home } from "lucide-react";

export const sidebarLinks = [
	{
		imgURL: <Home />,
		route: "/",
		label: "Home",
	},
	{
		imgURL: <CircleDollarSignIcon />,
		route: "/my-banks",
		label: "My Banks",
	},
	{
		imgURL: <CircleDollarSignIcon />,
		route: "/transaction-history",
		label: "Transaction History",
	},
	{
		imgURL: <CircleDollarSignIcon />,
		route: "/payment-transfer",
		label: "Transfer Funds",
	},
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "12345ESDF";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN = "access_sandbox_1234567890";

export const ITEMS = [
	{
		id: "68999", // appwrite item id
		accessToken: "access_sandbox_1234567890",
		itemId: "item_1234567890",
		userId: "12345ESDF",
		accountId: "vctfffdbvvcx",
	},
	{
		id: "68999", // appwrite item id
		accessToken: "access_sandbox_1234567890",
		itemId: "item_1234567890",
		userId: "12345ESDF",
		accountId: "vctfffdbvvcx",
	},
];

export const topCategoryStyles = {
	"Food & Dining": "bg-[#FDE8E8] text-[#D92D20]",
	Shops: "bg-[#E8FDF5] text-[#027A48]",
	Travel: "bg-[#E8FDF5] text-[#027A48]",
	"Health & Fitness": "bg-[#E8FDF5] text-[#027A48]",
	"Bills & Utilities": "bg-[#E8FDF5] text-[#027A48]",
	Entertainment: "bg-[#E8FDF5] text-[#027A48]",
	Education: "bg-[#E8FDF5] text-[#027A48]",
};
