import type { FC, SVGProps } from 'react'

export const iconIds = [
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'arrow-down',
  'arrow-up-left',
  'arrow-up-right',
  'arrow-down-left',
  'arrow-down-right',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevron-down',
  'minus-circle',
  'plus-circle',
  'pencil',
  'external-link',
  'search',
  'edit',
  'copy',
  'info-circle',
  'bulb',
  'fire',
  'sun',
  'moon',
  'twitter',
  'linkedin',
  'instagram',
  'dribbble',
  'github',
  'webstacks-logo-icon',
  'check',
  'help-circle',
  'x',
  'quote-start',
  'quote-end',
  'star',
  'play-icon',
  'facebook',
  'spotify',
  'deezer',
  'amazon-music',
  'podcast',
  'system',
  'dots-grid',
  'grid',
  'list',
  'refresh',
  'plus',
  'minus',
  'refresh-hover',
  'filter',
  'clientStoryCardLogo',
  'calendar',
  'clock',
] as const
export type IconIds = (typeof iconIds)[number]

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconIds
  size: number
}

export const Icon: FC<IconProps> = ({ icon, size = 24, ...props }) =>
  iconIds.includes(icon) ? (
    <div
      style={{
        padding: '5px',
        color: 'black',
      }}
    >
      <svg
        width={size * 1.25}
        height={size}
        style={{
          display: 'flex',
        }}
        role="img"
        aria-label={icon}
        {...props}
      >
        <use href={`/static/icons/sprites.svg#${icon}`} />
      </svg>
    </div>
  ) : null
