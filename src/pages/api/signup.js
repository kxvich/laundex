import bcrypt from "bcrypt";
import supabase from "@/services/supabase";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { email, surname, firstName, password, phoneNumber } = req.body;
		const saltRounds = 10;
		const hashPassword = await bcrypt.hash(password, saltRounds);

		const { data, error } = await supabase
			.from("users")
			.insert([
				{
					email,
					surname,
					firstName,
					password: hashPassword,
					phoneNumber,
				},
			])
			.select();

		if (error) {
			return res.status(500).json({ error: error.message });
		}

		res.status(200).json({ message: "User registered successfully!", data });
	} else {
		res.status(405).json({ message: "Method Not Allowed" });
	}
}
