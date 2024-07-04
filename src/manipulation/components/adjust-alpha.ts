import { Color } from '../../color';

/**
 * Adjusts the alpha of a color.
 * @param color - The color to adjust.
 * @param amount - The new alpha value, from 0 to 1.
 * @returns A new Color instance with adjusted alpha.
 */
export function adjustAlpha(color: Color, amount: number): Color {
    const rgb = color.toRgb();
    const newAlpha = Math.max(0, Math.min(1, amount));
    return new Color({ ...rgb, a: newAlpha });
}
