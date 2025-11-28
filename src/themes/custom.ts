import type { GlobalThemeOverrides } from 'naive-ui';
import commonCustom from './styles/custom/common'
import { composite } from 'seemly'

export const customTheme = {
  name: 'custom',
  common: commonCustom,
}

export function createThemeOverrides(primaryColor: string): GlobalThemeOverrides {
    function createHoverColor (color: string, overlayAlpha: number = 0.15): string {
        return composite(color, [255, 255, 255, overlayAlpha])
    }

    function createPressedColor (color: string, overlayAlpha: number = 0.15): string {
        return composite(color, [0, 0, 0, overlayAlpha])
    }
    
    const primaryColorHover = createHoverColor(primaryColor);
    const primaryColorPressed = createPressedColor(primaryColor);
    console.log('Generated theme colors:', { primaryColor, primaryColorHover, primaryColorPressed });
    return {
        common: {
        primaryColor,
        primaryColorHover,
        primaryColorPressed,
        primaryColorSuppl: primaryColorHover,
        }
    };
}

export const defaultOverrides: GlobalThemeOverrides = createThemeOverrides('#7fe7c4');