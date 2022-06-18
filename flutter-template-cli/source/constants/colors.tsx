/**
 * Define color system
 */
import chalk from 'chalk';

export abstract class Colors {
  public static readonly SYSTEM_RED = '#FF453A';
  public static readonly SYSTEM_YELLOW = '#FFD60A';
  public static readonly SYSTEM_GREEN = '#32D74B';
  public static readonly SYSTEM_GRAY = '#8E8E93';
  public static readonly WHITE = '#FFFFFF';
}

export const chalkWarning = (text: string) => chalk.hex(Colors.SYSTEM_YELLOW).visible(text);
