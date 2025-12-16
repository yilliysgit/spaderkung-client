import React from "react";

export type SpaderkungLogoProps = React.SVGProps<SVGSVGElement> & {
  /** Breedte/hoogte in px of bv. "100%" (als één waarde wordt doorgegeven, gebruik 'size') */
  width?: number | string;
  height?: number | string;
  /** Handige shorthand om zowel width als height te zetten */
  size?: number | string;
  /** Toegankelijkheidslabel (valt terug op 'title' attribuut van SVG) */
  ariaLabel?: string;
  /** Kleur van het linkervierkant (achtergrond) */
  squareColor?: string;
  /** Kleur van het woordmerk (de grote tekst) */
  textColor?: string;
  /** Kleur van de witte inner glyph in het vierkant */
  markColor?: string;
};

/**
 * SpaderkungLogo
 * - 1-op-1 conversie van je aangeleverde SVG (viewBox 0 0 508.5 77.4)
 * - Kleuren en afmetingen via props aanpasbaar
 * - Toegankelijk met role="img" + aria-label
 */
const SpaderkungLogo = React.forwardRef<SVGSVGElement, SpaderkungLogoProps>(
  (
    {
      size,
      width,
      height,
      ariaLabel = "Spaderkung logo",
      squareColor = "#FECC00",  // 👈 Changed to Swedish yellow!
      textColor = "#000000",
      markColor = "#FFFFFF",
      ...rest
    },
    ref
  ) => {
    const w = size ?? width;
    const h = size ?? height;

    return (
      <svg
        ref={ref}
        width={w}
        height={h}
        viewBox="0 0 508.5 77.4"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={ariaLabel}
        {...rest}
      >
        {/* Linker vierkant */}
        <path
          d="M74,76.8H2.9c-1.6,0-2.9-1.3-2.9-2.9V2.9C0,1.3,1.3,0,2.9,0h71.1c1.6,0,2.9,1.3,2.9,2.9v71.1c0,1.6-1.3,2.8-2.9,2.8Z"
          fill={squareColor}
        />

        {/* Woordmerk (cls-1 groep zonder speciale blending; gewoon fill) */}
        <g fill={textColor}>
          <path d="M98.2,54.1l7.4-9.1c4,4.4,8.8,6.4,12.5,6.4,4.3,0,6-2,6-4.4,0-2.9-1.9-4.2-7.9-6.2-8.1-2.8-16.1-6.6-16.1-17,0-8.9,7.7-15.7,17.4-15.8,7-.1,13.3,2.5,18.5,7l-7.1,9.3c-4.5-3.6-7.9-5.1-10.9-5.1s-4.9,1.6-4.9,4.1c-.1,2.4,1.9,3.6,7.7,5.8,9.4,3.6,16.5,6.1,16.5,16.5,0,12.5-10.9,17.1-19.4,17.1-6.9,0-14-2.7-19.7-8.6Z" />
          <path d="M182.2,43.6c0,11.3-7.2,19-17.2,19-4.2,0-7.6-1.5-9.9-4.3h-.2v18.4h-11.8V25.2h11.8v4h.1c2.6-3.2,6.4-4.7,10.5-4.7,9.5,0,16.7,7.9,16.7,19.1ZM170.3,43.6c0-5.2-3.4-8.7-7.9-8.7s-8,3.7-8,8.7,3.4,8.7,8.1,8.7,7.8-3.5,7.8-8.7Z" />
          <path d="M225,25.2v36.7h-11.1v-4h-.2c-2.4,3.1-5.8,4.6-10.2,4.6-10.1,0-17.3-7.6-17.3-19s7.3-19.1,16.8-19.1c4,0,7.5,1.6,10.1,4.7h.1v-3.9h11.8ZM213.7,43.6c0-5-3.4-8.7-7.7-8.7s-7.9,3.5-7.9,8.7,3.2,8.7,7.8,8.7c4.3,0,7.8-3.4,7.8-8.7Z" />
          <path d="M269.6,6.7v55.2h-11.1v-4h-.2c-2.5,3.1-6,4.6-10.5,4.6-10,0-17.2-7.6-17.2-19s7.3-19.1,16.7-19.1c4.1,0,7.8,1.6,10.4,4.7h.2V6.7h11.7ZM258.4,43.6c0-5-3.3-8.7-8-8.7s-7.9,3.5-7.9,8.7,3.3,8.7,7.9,8.7,8-3.4,8-8.7Z" />
          <path d="M312.2,46.7h-24.9c.8,4.1,4.3,6.4,8.6,6.4,3.4,0,6.4-1.5,8.8-4.4l6.2,7c-3.1,3.9-8.7,7-16.3,7-10.9,0-19-7.6-19-19s7.9-19,18.6-19,18.3,7.8,18.3,18.8c0,.8-.1,2.4-.3,3.2ZM287.3,39.8l13.7-.1c-.8-3.6-3.2-5.8-6.7-5.8s-6.2,2.1-7,5.9Z" />
          <path d="M341.2,24.6v12.6c-1-.1-2.1-.1-2.7-.1-5.5,0-8.4,3.5-8.4,8.3v16.5h-11.8V25.2h11.8v5h.1c2.8-3.8,6.6-5.7,10.6-5.7.1,0,.3,0,.4.1Z" />
          <path d="M361.4,48.5l-3.8,4.4v9h-11.8V6.7h11.8v30.7h.1l10.7-12.1h13.5l-12.6,14.3,12.9,22.3h-13l-7.7-13.4h-.1Z" />
          <path d="M420.9,25.2v36.7h-11.8v-4.1h-.2c-2.6,3.2-6.3,4.8-10.3,4.8-7.6,0-13.2-4-13.2-15.6v-21.8h11.7v18.8c0,5.9,1.7,8.1,5.6,8.1,3.5,0,6.4-2.8,6.4-8.8v-18.1h11.8Z" />
          <path d="M464.4,39.9v22h-11.8v-19.1c0-6-1.9-7.8-5.8-7.8s-6.7,2.8-6.7,8.5v18.4h-11.8V25.2h11.8v4.4c2.9-3.4,6.9-5.2,11.1-5.2,7.6.1,13.2,3.9,13.2,15.5Z" />
          <path d="M508.5,25.2v31.9c0,11.9-5,20.3-19.8,20.3-5.9,0-10.6-1-15.1-3.5l2.6-9.5c3.1,1.8,7.1,3.2,11.2,3.2,6.4,0,9.6-3.2,9.6-7v-3.4h-.2c-2.4,2.5-5.8,4-10,4-9.9,0-16.9-7.6-16.9-18s7-18.7,16.3-18.7c4,0,7.7,1.5,10.5,4.4h.1v-3.7s11.7,0,11.7,0ZM497.2,42.9c0-4.7-3.4-7.9-7.7-7.9s-7.9,3.2-7.9,7.9,3.4,7.9,7.9,7.9,7.7-3.3,7.7-7.9Z" />
        </g>

        {/* Witte inner glyph (cls-2) */}
        <path
          d="M49.9,68.7h-22.7v-1.7c0-.4.1-.6.4-.8,1-.6,1.9-1.4,2.7-2.3,1.8-2,3-4.3,4-6.7.6-1.5,1-3.1,1.2-4.8-1.4.9-2.7,1.7-4.2,2.2-5.3,1.9-10.2,1.3-14.6-2.2-4.1-3.3-5.7-9-3.8-14,1.3-3.4,3.5-6.1,6.3-8.5,1.9-1.6,4-3.1,5.9-4.7,5.5-4.7,10.1-10.1,13.3-16.5.1-.1.1-.3.3-.4.2.1.2.3.3.5,3.4,6.8,8.3,12.3,14.1,17.1,2.2,1.8,4.5,3.4,6.6,5.3,2.1,2,3.8,4.3,4.8,7.1.4,1,.5,2.1.8,3.2v2.1c0,.1-.1.3-.1.4-.8,5.5-4,9.1-9.2,10.8-4.5,1.5-8.9.6-12.9-1.7-.4-.2-.8-.5-1.2-.8,0,.2.1.3.1.4s0,.2.1.3c.9,4.8,2.9,9,6.6,12.3,1.2.7,1.3,2,1.2,3.4Z"
          fill={markColor}
        />
      </svg>
    );
  }
);

SpaderkungLogo.displayName = "SpaderkungLogo";

export default SpaderkungLogo;