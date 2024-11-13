// import crypto from 'crypto'
// import twilio from 'twilio'
// import bodyParser from 'body-parser';

// app.use(bodyParser.json());

// // Twilio config
// const client = twilio(process.env.accountSid, process.env.authToken);

// // Generate and send OTP
// app.post('/send-otp', (req, res) => {
//   const mobile = req.body.mobile;
//   const otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP

//   client.messages
//     .create({
//       body: `Your OTP is ${otp}`,
//       from: '7417773844',
//       to: mobile,
//     })
//     .then(() => res.json({ success: true, otp }))
//     .catch((error) => res.status(500).json({ success: false, error }));
// });

// import 'dotenv/config';
// import twilio from 'twilio';

// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// export const sendOtp = (req, res) => {
//   const { mobile } = req.body;

//   client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID)
//     .verifications
//     .create({ to: `+91${mobile}`, channel: 'sms' })
//     .then(verification => res.status(200).json({ success: true, message: 'OTP sent', sid: verification.sid }))
//     .catch(error => res.status(500).json({ success: false, error: error.message }));
// };

// export const verifyOtp = (req, res) => {
//   const { mobile, code } = req.body;

//   client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID)
//     .verificationChecks
//     .create({ to: mobile, code })
//     .then(verification_check => {
//       if (verification_check.status === 'approved') {
//         res.status(200).json({ success: true, message: 'OTP verified' });
//         next();
//       } else {
//         res.status(400).json({ success: false, message: 'Invalid OTP' });
//       }
//     })
//     .catch(error => res.status(500).json({ success: false, error: error.message }));
// };



import twilio from 'twilio';
import 'dotenv/config';

// Twilio client setup
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Function to send OTP
export const sendOtp = (mobile) => {
  return client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verifications
    .create({ to: `+91${mobile}`, channel: 'sms' });
};

// Controller for initiating OTP
export const initiateOtp = async (req, res) => {
  const { mobile } = req.body;
  if (!mobile) {
    return res.status(400).json({
      message: "Mobile number is required",
      success: false,
    });
  }

  try {
    await sendOtp(mobile);
    return res.status(200).json({
      message: "OTP sent successfully",
      success: true,
    });
  } catch (err) {
    console.error("Error sending OTP:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Function to verify OTP (used within register controller, not as middleware)
export const verifyOtp = async (mobile, code) => {
  try {
    const verification = await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks
      .create({ to: `+91${mobile}`, code });
    return verification.status === 'approved';
  } catch (err) {
    console.error("Error verifying OTP:", err);
    return false;
  }
};
