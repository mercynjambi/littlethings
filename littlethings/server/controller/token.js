const axios = require('axios');

const createToken = async (req, res, next) => {
    const secret = "NfSPcaoDnFBRVWClwPHRC5l1bHXU09qQQH8bouVUCfZ0mUgQTZxPwEvNe0BpGLO3";
    const consumer = "YmRAbKHzqGsGapMSLlYQYNFfvIfmrj8qo9fu0D4Pv4akQyKV";
    const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");

    await axios.get(
        "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
        {
            headers: {
                "Authorization": `Basic ${auth}`,
            },
        }
    ).then((data) => {
        token=data.data.access_token;
        console.log(data.data);
        next();
    }).catch((err) => {
        console.log(err);
        res.status(400).json({ message: err.message });
    });
};

const stkPush = async (req, res) => {
    const shortCode = 174379;
    const phone = req.body.phone.substring(1);
    const amount = req.body.amount;
    const passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

    const date = new Date();
    const timestamp = 
        date.getFullYear() + 
        ("0" + (date.getMonth() + 1)).slice(-2) + 
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);

    const password = Buffer.from(shortCode + passkey + timestamp).toString("base64");

    const data = {
        BusinessShortCode: process.env.SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: `254${phone}`,
        PartyB: process.env.SHORTCODE,
        PhoneNumber: `254${phone}`,
        CallBackURL: "https://mydomain.com/path",
        AccountReference: "Mpesa Test",
        TransactionDesc: "Testing stk push",
    };

    await axios
        .post(url, data, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        .then((response) => {
            console.log(response.data);
            res.status(200).json(response.data);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ message: err.message });
        });
};

module.exports = { createToken, stkPush };


