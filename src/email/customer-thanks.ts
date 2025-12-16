export function CustomerThanksEmail({ name }: { name: string }) {
  return `
  <div style="font-family:Arial, sans-serif; padding:20px; background:#f7f7f7;">
    <div style="max-width:600px; margin:0 auto; background:white; padding:30px; border-radius:12px;">
      
      <img src="https://spaderkung.se/logo.png" alt="Spaderkung Pizzeria" 
        style="width:160px; margin-bottom:20px;" />

      <h2 style="color:#002855;">Tack ${name}!</h2>

      <p style="font-size:15px; color:#333;">
        Vi har mottagit ditt meddelande och återkommer till dig så snart som möjligt.
      </p>

      <p style="font-size:14px; color:#777; margin-top:25px;">
        Med vänliga hälsningar,<br/>
        <strong>Spaderkung Pizzeria</strong>
      </p>

    </div>
  </div>
  `;
}
