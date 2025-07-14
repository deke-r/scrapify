import nodemailer from "nodemailer";

export async function POST(request) {
    const body = await request.json();

    const {
        name,
        phone,
        address,
        state,
        pincode,
        email,
        scrapTypes = [],
        pickupDate,
        remarks,
    } = body;

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const recipients = ['bhavishya.sense@gmail.com',
            'senseprojects@yahoo.com',
            'senseprojects2019@gmail.com',
        ];

        await transporter.sendMail({
            from: `"SCRAPIFY PICKUP REQUEST" <${process.env.MAIL_USER}>`,
            to: recipients,
            subject: "New Scrap Pickup Request",
           html: `
  <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333; max-width: 700px; margin: auto; border: 1px solid #ddd; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
    <div style="background-color: #228b22; color: #fff; padding: 24px; text-align: center; border-top-left-radius: 12px; border-top-right-radius: 12px;">
      <h2 style="margin: 0; font-size: 20px;">New Pickup Request</h2>
      <p style="margin: 5px 0 0;">You have received a new scrap pickup request from the <strong>Scrapify</strong> website.</p>
    </div>

    <div style="padding: 24px; background-color: #fff;">
      <table style="width: 100%; border-collapse: separate; border-spacing: 0; font-size: 14px;">
        <tbody>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 12px 16px; font-weight: bold; border-top-left-radius: 8px;">Name</td>
            <td style="padding: 12px 16px; border-top-right-radius: 8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-weight: bold;">Phone</td>
            <td style="padding: 12px 16px;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-weight: bold;">Email</td>
            <td style="padding: 12px 16px;">${email || "-"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-weight: bold;">Address</td>
            <td style="padding: 12px 16px;">${address}, ${state} - ${pincode}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-weight: bold;">Scrap Types</td>
            <td style="padding: 12px 16px;">${scrapTypes.length > 0 ? scrapTypes.join(", ") : "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-weight: bold;">Pickup Date</td>
            <td style="padding: 12px 16px;">${pickupDate}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 12px 16px; font-weight: bold; border-bottom-left-radius: 8px;">Remarks</td>
            <td style="padding: 12px 16px; border-bottom-right-radius: 8px;">${remarks || "-"}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background-color: #f1f1f1; padding: 16px; text-align: center; font-size: 12px; color: #666; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;">
      <p style="margin: 0;">This email was sent automatically by the <strong>Scrapify Website</strong>.</p>
    </div>
  </div>
`,

        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Email Error:", error);
        return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), {
            status: 500,
        });
    }
}
