import { describe, expect, it } from 'vitest';
import { tableHeadCellVariants } from './classes';

describe('tableHeadCellVariants', () => {
  it('should include h-32 in base class for consistent header height', () => {
    const result = tableHeadCellVariants();
    expect(result).toContain('h-32');
  });

  it('should include h-32 regardless of variant combinations', () => {
    const interactive = tableHeadCellVariants({ interactive: true, sorted: true });
    expect(interactive).toContain('h-32');

    const pinned = tableHeadCellVariants({ pinned: true, lastPinnedLeft: true });
    expect(pinned).toContain('h-32');

    const draggable = tableHeadCellVariants({ draggable: true });
    expect(draggable).toContain('h-32');
  });

  it('should include py-4 vertical padding in base class', () => {
    const result = tableHeadCellVariants();
    expect(result).toContain('py-4');
  });
});
