import { DarkMode, Gradient, LightMode } from '@/components/Icon'

export function DownloadIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="rotate(65.924 1.519 20.92) scale(25.7391)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"
        />
      </defs>
      <LightMode>
        <path
          d="M3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3 3 8.82 3 16Z"
          fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m15.408 16.509-1.04-5.543a1.66 1.66 0 1 1 3.263 0l-1.039 5.543a.602.602 0 0 1-1.184 0Z"
          className="fill-[var(--icon-foreground)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
          fillOpacity={0.5}
          stroke="currentColor"
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </LightMode>
      <DarkMode>
        <g
            transform="matrix(1.4359,0,0,1.4359,-3.23077,-3.23077)"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit={2}
            fill={`url(#${id}-gradient-dark)`}
        >
            <path id="download" d="M12,2.25C6.615,2.25 2.25,6.615 2.25,12C2.25,17.385 6.615,21.75 12,21.75C17.385,21.75 21.75,17.385 21.75,12C21.75,6.615 17.385,2.25 12,2.25ZM11.47,16.28C11.761,16.571 12.239,16.571 12.53,16.28L15.53,13.28C15.682,13.138 15.769,12.939 15.769,12.731C15.769,12.32 15.43,11.981 15.019,11.981C14.811,11.981 14.612,12.068 14.47,12.22L12.75,13.94L12.75,8.25C12.75,7.839 12.411,7.5 12,7.5C11.589,7.5 11.25,7.839 11.25,8.25L11.25,13.94L9.53,12.22C9.391,12.091 9.208,12.019 9.019,12.019C8.607,12.019 8.269,12.357 8.269,12.769C8.269,12.958 8.341,13.141 8.47,13.28L11.47,16.28Z"/>
        </g>
      </DarkMode>
    </>
  )
}
