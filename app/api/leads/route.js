import nodemailer from "nodemailer"

export async function POST(req) {
  const { phone } = await req.json()

  if (!phone || phone.length !== 10) {
    return new Response("Invalid phone", { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: `"SCRAPIFY LEAD" <${process.env.MAIL_USER}>`,
    to: "bhavishya.sense@gmail.com",
    subject: "New Pickup Lead - Phone",
    html: `
  <div style="padding: 40px 20px; font-family: Arial, sans-serif; color: #fff;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: auto; background: #fff; color: #333; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <tr style="background: linear-gradient(to right, #228b22, #32cd32);">
        <td style="padding: 20px; text-align: center; color: #fff; font-size: 20px; font-weight: bold;">
          📞 New Scrap Pickup Lead
        </td>
      </tr>
      <tr>
        <td style="padding: 20px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 10px 0;"><strong>${phone}</strong></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          This lead was generated from the Scrapify website.
        </td>
      </tr>
    </table>
  </div>
`

  })

  return new Response("Sent", { status: 200 })
}
