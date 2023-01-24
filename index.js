import axios from 'axios'

const URL = "https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=ko-kr";
const DATA = { "act_id": "e202102251931481" };
const COOKIES = "ltoken=YOUR_LTOKEN; ltuid=YOUR_LTUID;";

axios.post(URL, DATA, { headers: { Cookie: COOKIES } }).then((res) => {
    console.log(res.data["message"])
}).catch(error => {
    console.log(error);
})


