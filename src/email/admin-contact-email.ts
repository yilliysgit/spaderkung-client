export function AdminContactEmail({ name, email, phone, message }: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return `
  <div style="font-family:Arial, sans-serif; padding:20px; background:#f7f7f7;">
    <div style="max-width:600px; margin:0 auto; background:white; padding:30px; border-radius:12px;">
      
      <img src="https://spaderkung.se/logo.png" alt="Spaderkung Pizzeria" 
        style="width:160px; margin-bottom:20px;" />

      <h2 style="color:#002855; margin-bottom:10px;">Ny kontaktförfrågan</h2>
      
      <p style="color:#333; font-size:15px;">
        Du har fått ett nytt meddelande från kontaktformuläret.
      </p>

      <div style="margin-top:20px; padding:20px; background:#FAFAFA; border-radius:8px;">
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || '-'}</p>
        <p><strong>Meddelande:</strong><br/>${message}</p>
      </div>

    </div>
  </div>
  `;
}
