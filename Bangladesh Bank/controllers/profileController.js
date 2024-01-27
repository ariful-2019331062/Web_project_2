import db from "../db.js";
import { collection, query, where, getDocs } from "firebase/firestore";

const getProfileInfo = async (req, res) => {
  try {
    console.log(req.query);
    const { account_id } = req.query;
    const q = query(
      collection(db, "ecomm_users"),
      where("account_id", "==", account_id)
    );
    const querySnapshot = await getDocs(q);
    const account_info = querySnapshot.docs[0].data();

    res.status(200).json({
      status: "success",
      data: {
        Name: account_info.name,
        UserType: account_info.user_type,
        Phone: account_info.phone,
        Account_id: account_info.account_id,
        Email: account_info.email,
        Address: account_info.address,
      },
    });
  } catch (e) {
    console.log("this is error " + e);
  }
};
export { getProfileInfo };
