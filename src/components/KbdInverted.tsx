import { DarkMode, Kbd, Tooltip } from '@chakra-ui/react';

/**
 * Custom `Tooltip` compontent used to display `Kbds` w/ predefined styling
 * @param keys array of keyboard commands to be rendered as `<Kbd>`
 */
export const KbdTooltip = ({
  keys,
  children,
}: {
  keys: string[];
  children?: React.ReactNode;
}) => (
  <Tooltip
    pb={2}
    hasArrow
    label={
      <DarkMode>
        <span>
          {keys.map((key, index) => {
            return (
              <>
                <Kbd>{key}</Kbd>
                {index < keys.length - 1 ? ' + ' : ''}
              </>
            );
          })}
        </span>
      </DarkMode>
    }
  >
    {children}
  </Tooltip>
);
